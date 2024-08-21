"use client";

import axios from "axios";
import { useEffect, useState } from "react";

const Testinomial = () => {
  const [testinomial, setTestinomial] = useState<any>(null);
  useEffect(() => {
    getTestinomial();
  }, []);
  const getTestinomial = async () => {
    const res = await axios.get("/api/testinomial");
    setTestinomial(res.data);
  };
  return (
    <>
      <div className="flex flex-col gap-3 py-7 bg-[#F1F2F6] px-5 sm:px-10 md:px-20">
        <center>
          <h2 className="text-sm font-medium uppercase text-gray-500">
            Testinomials
          </h2>
          <h2 className="text-2xl font-semibold">
            What Our Customer are Saying
          </h2>
        </center>
        {testinomial ? (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-5 ">
            {testinomial?.map((curr: any, index: any) => {
              const { imgSrc, content, authorName } = curr;
              return (
                <div
                  className="p-5 border-2 rounded-md shadow-md flex flex-col gap-3 relative w-4/5 justify-self-center bg-white"
                  key={index}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="#e93826"
                    className="absolute -top-4"
                  >
                    <path d="M3.691 6.292C5.094 4.771 7.217 4 10 4h1v2.819l-.804.161c-1.37.274-2.323.813-2.833 1.604A2.902 2.902 0 0 0 6.925 10H10a1 1 0 0 1 1 1v7c0 1.103-.897 2-2 2H3a1 1 0 0 1-1-1v-5l.003-2.919c-.009-.111-.199-2.741 1.688-4.789zM20 20h-6a1 1 0 0 1-1-1v-5l.003-2.919c-.009-.111-.199-2.741 1.688-4.789C16.094 4.771 18.217 4 21 4h1v2.819l-.804.161c-1.37.274-2.323.813-2.833 1.604A2.902 2.902 0 0 0 17.925 10H21a1 1 0 0 1 1 1v7c0 1.103-.897 2-2 2z"></path>
                  </svg>
                  <center className="h-[80px]">
                    <img src={imgSrc} alt="compact car" className="w-[120px]" />
                  </center>
                  <div className="flex flex-col gap-2">
                    <div className="text-base font-normal text-gray-500">
                      {content.lengt > 100
                        ? content.slice(0, 50) + "..."
                        : content}
                    </div>
                    <div className="text-base font-semibold">
                      - {authorName}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-5 ">
            {new Array(4).fill(0).map((curr, index) => {
              return (
                <div
                  className="p-5 border-2 rounded-md shadow-md flex flex-col gap-3 relative w-4/5 justify-self-center bg-white"
                  key={index}
                >
                  <div className="skeleton h-[80px] w-[120px]"></div>
                  <div className="skeleton h-[100px]"></div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default Testinomial;
