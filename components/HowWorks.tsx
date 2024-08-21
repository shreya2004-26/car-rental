import { works } from "@/DB/works";
import React from "react";

const HowWorks = () => {
  return (
    <div className="flex flex-col gap-3 py-7 px-5 sm:px-10 md:px-20 bg-[#F1F2F6]">
      <center>
        <h2 className="text-sm font-medium uppercase text-gray-500">
          How it works
        </h2>
        <h2 className="text-xl font-semibold">Rent A Car in 4 Easy Steps</h2>
      </center>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 py-3">
        {works.map((curr: any, index: any) => {
          return (
            <div className="flex flex-col items-center" key={index}>
              <img
                src={curr.imgSrc}
                alt={curr.title}
                className="w-[80px] h-[80px] md:w-[140px] md:h-[140px]"
              />
              <div className="flex flex-col items-center gap-1">
                <h2 className="text-base md:text-lg font-semibold">
                  {curr.title}
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

export default HowWorks;
