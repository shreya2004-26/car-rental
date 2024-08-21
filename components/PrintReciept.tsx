"use client";

import { changeDateTimeFormat } from "@/utils/DateFunc";

const PrintReciept = ({ details }: any) => {
  const {
    id,
    paymentId,
    pickUpInfo,
    dropOffInfo,
    pickupLocation,
    paymentAmount,
    car: { model, plateNumber },
    totalAmount,
  }: any = details;

  return (
    <div className="flex flex-col" style={{ minHeight: "100vh" }}>
      <div>
        <h2 className="text-2xl font-bold text-center mb-14">
          Car Rental Reciept
        </h2>
      </div>
      <div className="flex flex-col gap-3">
        <div>
          <h2 className="text-lg font-semibold mb-2">Booking Details:</h2>
          <div className="grid grid-cols-2 items-center gap-3 border-[1px] border-gray-200 p-3">
            <div className="flex flex-col w-full gap-1 border-r-[1px] border-gray-200 h-full">
              <div className="grid grid-cols-2 items-center">
                <h2 className="text-base font-medium">Booking ID</h2>
                <h2 className="text-sm font-medium ">{id?.split(0, 14)}</h2>
              </div>
              <div className="grid grid-cols-2 items-center ">
                <h2 className="text-base font-medium">Car Model</h2>
                <h2 className="text-sm font-medium">{model}</h2>
              </div>
              <div className="grid grid-cols-2 items-center ">
                <h2 className="text-base font-medium">Number Plate</h2>
                <h2 className="text-sm font-medium">{plateNumber}</h2>
              </div>
            </div>
            <div className="grid grid-cols-2 w-full h-full">
              <div className="flex flex-col gap-1 border-r-[1px] border-gray-200 px-5">
                <h2 className="text-base font-semibold">Pick-Up</h2>
                <h2 className="text-sm font-medium text-gray-700">
                  {pickupLocation}
                </h2>
                <h2 className="text-base font-semibold">
                  {changeDateTimeFormat(pickUpInfo)}
                </h2>
              </div>
              <div className="flex flex-col gap-1 px-5">
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
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-2">Payment Details:</h2>
          <div className="grid grid-cols-5 items-center gap-3 border-[1px] border-gray-200 p-3">
            <div className="flex flex-col gap-1 border-r-[1px] border-gray-200 w-full pr-3 h-fit">
              <h2 className="text-base font-semibold">Payment ID</h2>
              <h2 className="text-sm font-medium text-gray-700">
                {paymentId?.split(0, 14)}
              </h2>
            </div>
            <div className="flex flex-col gap-1 border-r-[1px] border-gray-200 w-full pr-3 h-fit">
              <h2 className="text-base font-semibold">Date</h2>
              <h2 className="text-sm font-medium text-gray-700">Sep 23,2023</h2>
            </div>
            <div className="flex flex-col gap-1 border-r-[1px] border-gray-200 w-full pr-3 h-fit">
              <h2 className="text-base font-semibold">Paid Amount</h2>
              <h2 className="text-sm font-medium text-gray-700">
                &#8377; {paymentAmount}
              </h2>
            </div>
            <div className="flex flex-col gap-1 border-r-[1px] border-gray-200 w-full pr-3 h-fit">
              <h2 className="text-base font-semibold">Total Amount</h2>
              <h2 className="text-sm font-medium text-gray-700">
                &#8377; {totalAmount}
              </h2>
            </div>

            <div className="flex flex-col gap-1  w-full pr-3 h-fit">
              <h2 className="text-base font-semibold">Status</h2>
              <h2 className="text-sm font-medium text-gray-700">
                {totalAmount == paymentAmount ? "Completed" : "Due"}
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2  mt-96 py-3 border-t-[1px] border-gray-200">
        <div className="border-r-[1px] border-gray-200 h-full px-3">
          <h2 className="text-lg font-semibold">Corporate Office</h2>
          <h2 className="text-base font-medium">
            A-124, Raisen Rd, Siddart Lake City, Anandnagar, Bhopal, Madhya
            Pradesh 462022
          </h2>
          <h2 className="text-sm font-normal">
            Mobile No.: +91-7371986179 <br />
            E-mail : info@carland.in
          </h2>
        </div>
        <div className=" h-full px-3">
          <h2 className="text-lg font-semibold">Branch Office</h2>
          <h2 className="text-base font-medium">
            Esteem Tower 2,Indrapuri A sector, Sector A, Indrapuri, Bhopal,
            Madhya Pradesh 462022
          </h2>
          <h2 className="text-sm font-normal">
            Mobile No.: +91-7371986179
            <br />
            E-mail : info@carland.in
          </h2>
        </div>
      </div>
      <footer className="footer footer-center px-10 py-4 border-t  text-base-content border-base-300 bg-white">
        <aside>
          <p>Copyright © 2023 - All right reserved by CarLand Rentals Ltd</p>
        </aside>
      </footer>
    </div>
  );
};

export default PrintReciept;
