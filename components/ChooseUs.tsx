import { choose } from "@/DB/choose";
import React from "react";

const ChooseUs = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 py-7 items-center justify-center px-5 sm:px-10 md:px-20">
      <div>
        <img src="/Hyundai.png" alt="Hyundai" className="w-full " />
      </div>
      <div className="flex flex-col gap-1 w-full md:w-3/4 justify-self-center">
        <h2 className="text-base font-medium uppercase text-gray-500">
          Why choose us
        </h2>
        <h2 className="text-3xl font-semibold">
          We offer the best experience with our rental deals
        </h2>
        <div className="flex flex-col gap-5 mt-6">
          {choose.map((curr: any, index: any) => {
            const { imgSrc, title, content } = curr;
            return (
              <div className="flex gap-5 items-center" key={index}>
                <div className="bg-gray-100 p-2 rounded-md w-fit h-fit border-2 shadow-md">
                  <img src={imgSrc} alt={title} className="w-[20px] h-[20px]" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold">{title}</h2>
                  <h2 className="text-base font-normal text-gray-500">
                    {content}
                  </h2>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
