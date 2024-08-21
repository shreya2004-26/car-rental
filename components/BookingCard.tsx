"use client";
import React, { useRef } from "react";
import ReactToPrint from "react-to-print";
import { changeDateTimeFormat } from "@/utils/DateFunc";
import PrintReciept from "./PrintReciept";

const BookingCard = ({ details }: any) => {
  const {
    name,
    contactNumber,
    pickUpInfo,
    dropOffInfo,
    pickupLocation,
    id,
    car: { imgSrc },
  } = details;

  const ref: any = useRef<HTMLDivElement>();
  return (
    <>
      <div className="flex flex-col md:flex-row w-full rounded-md border-2 border-gray-200 shadow-md py-4 px-3 md:px-5 justify-between items-center gap-3">
        <div className="w-10/12 md:w-1/5">
          <img src={imgSrc} alt="Car" className="w-10/12" />
        </div>
        <div className="w-full flex flex-col gap-2">
          <div className="flex justify-between">
            <div className="flex flex-col gap-0">
              <h2 className="text-sm font-medium text-gray-700">
                Customer Name: <span className="text-base">{name}</span>
              </h2>
            </div>
            <h2 className="text-sm font-medium text-red-600">
              Booking ID: <span>{id.slice(0, 15) + "..."}</span>
            </h2>
          </div>
          <div className="mt-2">
            <div className="flex flex-col md:grid md:grid-cols-2">
              <div className="flex flex-col gap-1 md:border-r-2 border-gray-200 border-b-2 pb-2 md:border-b-0">
                <h2 className="text-base font-semibold">Pick-Up</h2>
                <h2 className="text-sm font-medium text-gray-700">
                  {pickupLocation}
                </h2>
                <h2 className="text-base font-semibold">
                  {changeDateTimeFormat(pickUpInfo)}
                </h2>
              </div>
              <div className="flex flex-col gap-1 pt-2 md:pt-0 md:px-5">
                <h2 className="text-base font-semibold">Drop Off</h2>
                <h2 className="text-sm font-medium text-gray-700">
                  {pickupLocation}
                </h2>
                <h2 className="text-base font-semibold">
                  {changeDateTimeFormat(dropOffInfo)}
                </h2>
              </div>
            </div>
          </div>
          <h2 className="text-xs font-medium text-gray-600">
            Contact Number: <span className="text-xs">+91-{contactNumber}</span>
          </h2>
        </div>
        <div className="w-fit">
          <ReactToPrint
            bodyClass="print-agreement"
            content={() => ref.current}
            trigger={() => (
              <button className="text-white text-base font-medium px-3 py-1 rounded-md bg-red-500 w-fit my-5 flex gap-2 h-fit">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0110.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0l.229 2.523a1.125 1.125 0 01-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0021 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 00-1.913-.247M6.34 18H5.25A2.25 2.25 0 013 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 011.913-.247m10.5 0a48.536 48.536 0 00-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5zm-3 0h.008v.008H15V10.5z"
                    />
                  </svg>
                </span>
              </button>
            )}
          />
        </div>
      </div>
      <div style={{ display: "none" }}>
        <div ref={ref}>{<PrintReciept details={details} />}</div>
      </div>
    </>
  );
};

export default BookingCard;
