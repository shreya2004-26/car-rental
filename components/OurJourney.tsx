import { ourRecord } from "@/DB/ourRecord";
import React from "react";

const OurJourney = () => {
  return (
    <div className="flex justify-center py-7">
      <div className="grid grid-cols-2 md:grid-cols-4  bg-white rounded-md shadow-md  p-5 md:p-8  border-2 w-11/12 md:w-3/4  gap-5">
        {ourRecord.map((curr: any, index: any) => {
          return (
            <div
              className="flex flex-col items-center justify-center w-fit gap-3 justify-self-center"
              key={index}
            >
              <img
                src={curr.imgSrc}
                alt="car"
                className="w-[30px] md:w-[45px] h-[30px] md:h-[45px]"
              />
              <div className="flex flex-col items-center ">
                <h2 className="text-sm md:text-lg font-semibold">
                  {curr.data}
                </h2>
                <h2 className="text-xs md:text-sm font-normal text-gray-500 text-center">
                  {curr.content}
                </h2>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OurJourney;
