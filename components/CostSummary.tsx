"use client";
import { coupons } from "@/DB/coupons";
import { ConfirmBookingContext } from "@/context/ConfirmBookingContext";
import { diffDates } from "@/utils/DateFunc";
import axios from "axios";
import { redirect, useRouter } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";

const CostSummary = ({ bookingData }: any) => {
  const router = useRouter();
  const [promoCode, setPromoCode] = useState<any>(null);
  const [errorPromo, setErrorPromo] = useState<any>(false);
  const [promoMessage, setPromoMessage] = useState<any>(null);
  const [paymentType, setPaymentType] = useState<any>(null);
  const [couponValue, setCouponValue] = useState<any>(0);
  const { setConfirmBookingData } = useContext(ConfirmBookingContext);
  const { car, pickUpInfo, dropOffInfo, id, name, contactNumber } = bookingData;
  useEffect(() => {}, [paymentType || errorPromo]);

  const handlePromoCodeSubmit = () => {
    let isValidCoupon = false;
    for (let i = 0; i < coupons.length; i++) {
      if (coupons[i].name === promoCode) {
        isValidCoupon = true;
        setCouponValue(coupons[i].value);
      }
    }
    if (isValidCoupon) {
      setErrorPromo(false);
      setPromoMessage("Coupon is successfully applied.");
    } else {
      setCouponValue(0);
      setErrorPromo(true);
      setPromoMessage("Invalid Coupon");
    }
  };
  //calculate data
  const totalDays = diffDates(pickUpInfo, dropOffInfo);
  const ReservationAmount = totalDays * Number(car.dailyPrice);
  const totalAmount = ReservationAmount + 600 + 2000 - couponValue;

  const makePayment = async ({ bookingID, billingAmount }: any) => {
    //initialize razorpay
    const res = await initializeRazorpay();
    //if razorpay is not initialized
    if (!res) {
      alert("Razorpay Failed to load");
      return;
    }
    // Make API call for creating an order that will show on razorpay popup
    const { data } = await axios.post("/api/razorpay", {
      bookingID,
      billingAmount,
    });
    var options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_ID,
      name: "CarLand Pvt Ltd",
      currency: data.currency,
      amount: data.amount,
      order_id: data.id,
      description: `Payment for Booking Id = ${id} by ${name}`,
      image: "/logo.svg",
      handler: async function (response: any) {
        if (response) {
          const { data } = await axios.post("/api/confirmBooking", {
            paymentId: response.razorpay_payment_id,
            orderId: response.razorpay_order_id,
            paymentAmount: billingAmount,
            id,
            totalAmount,
          });
          setConfirmBookingData({ ...data, totalAmount });
        }
        router.push("/confirm-booking");
      },
      prefill: {
        name,
        email: "carLandPvt@gmail.com",
        contact: contactNumber,
      },
    };

    //open the razorpay popup
    const paymentObject = new (window as any).Razorpay(options);
    paymentObject.open();
  };
  const initializeRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  return (
    <div className="p-5 rounded-md border-2 border-gray-200 flex flex-col gap-5 shadow-md w-fit justify-self-center md:justify-self-end h-fit md:h-full">
      <div className="flex flex-col gap-5 items-center border-b-2 border-gray-100 pb-3">
        <h2 className="text-xl font-semibold text-center">Cost Summary</h2>
        <div className="flex flex-col gap-1 w-full">
          <div className="grid grid-cols-2 items-center">
            <h2 className="text-base font-medium">Reservation</h2>
            <h2 className="text-sm font-normal text-end">
              &#8377; {car?.dailyPrice}* {`${totalDays} Days`} = &#8377;{" "}
              {ReservationAmount}
            </h2>
          </div>
          <div className="grid grid-cols-2 items-center">
            <h2 className="text-base font-normal">Insurance & GST</h2>
            <h2 className="text-sm font-normal text-end">&#8377; 599</h2>
          </div>
          <div className="grid grid-cols-2 items-center">
            <h2 className="text-base font-normal justify-self-center">
              Refundable security deposit
            </h2>
            <h2 className="text-sm font-normal text-end">&#8377; 1999</h2>
          </div>
        </div>
      </div>
      <div className="border-b-2 border-gray-100 pb-3">
        <div className="flex justify-between border-2 border-gray-200 items-center">
          <input
            type="text"
            placeholder="Enter Promo Code Here"
            className="input text-sm font-normal placeholder-gray-500 w-full max-w-xs focus:outline-none focus:border-none h-fit"
            onChange={(e) => setPromoCode(e.target.value)}
          />
          <button
            className="text-base font-medium bg-red-500 text-white px-4 py-2 rounded-none  cursor-pointer w-fit h-full"
            onClick={handlePromoCodeSubmit}
          >
            Add
          </button>
        </div>
        {promoMessage &&
          (errorPromo ? (
            <h2 className="text-sm text-red-600 px-2 font-medium">
              {promoMessage}
            </h2>
          ) : (
            <h2 className="text-sm text-green-600 px-2 font-medium">
              {promoMessage}
            </h2>
          ))}
      </div>
      <div
        className={`${
          !errorPromo && promoMessage ? "flex" : "hidden"
        } justify-between items-center `}
      >
        <h2 className="text-base font-medium">Coupon</h2>
        <h2 className="text-sm font-medium"> - &#8377; {couponValue}</h2>
      </div>
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">Subtotal</h2>
        <h2 className="text-base font-medium"> &#8377; {totalAmount}</h2>
      </div>
      <div className="flex flex-col gap-1">
        <div className="form-control">
          <label className="label cursor-pointer flex justify-start gap-3 items-center">
            <input
              type="radio"
              name="radio-10"
              className="radio checked:bg-red-500"
              checked={paymentType === -1 ? true : false}
              value={-1}
              onChange={() => setPaymentType(-1)}
            />
            <span className="label-text text-base font-medium">
              Pay Booking Amount
            </span>
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer flex justify-start gap-3 items-center">
            <input
              type="radio"
              name="radio-10"
              className="radio checked:bg-green-600"
              checked={paymentType === 1 ? true : false}
              value={1}
              onChange={() => setPaymentType(1)}
            />
            <span className="label-text text-base font-medium">
              Pay Rental Amount
            </span>
          </label>
        </div>
      </div>
      <div className="flex justify-center">
        {paymentType === null ? (
          <button className="text-base font-medium bg-gray-500 text-white px-4 py-2   cursor-pointer my-5 w-3/4">
            Pay
          </button>
        ) : (
          <button
            className="text-base font-medium bg-red-500 text-white px-4 py-2   cursor-pointer my-5 w-3/4"
            onClick={() =>
              makePayment({
                bookingID: id,
                billingAmount: paymentType === -1 ? 2000 : totalAmount,
              })
            }
          >
            Pay &#8377;
            {paymentType === -1 ? 2000 : totalAmount}
          </button>
        )}
      </div>
    </div>
  );
};

export default CostSummary;
