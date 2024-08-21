import { aboutDB } from "@/DB/about";
import React from "react";

const AboutUs = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-5 p-5 ">
        <div>
          <img
            src="https://res.cloudinary.com/ddzlhdlda/image/upload/v1701857344/CarRental/51506280123bm41gdz5t9arbqgkr56av1ylghnsxvj8rqo56btxcejzw2npfore5biub0xeydqkjeylbepwaajvw0saymn3rmqmdiw81yotlvfg_y1dmqd.png"
            alt="Red Car"
            className="w-full"
          />
        </div>
        <div className="flex flex-col gap-4 w-full md:w-3/4 justify-self-center">
          <div className="flex flex-col gap-1 items-center md:items-start">
            <h2 className="text-base font-medium text-gray-500">About Us</h2>
            <h2 className="text-2xl font-semibold w-full md:w-3/4">
              Madhya Pradesh Largest Car Rental Marketplace
            </h2>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-sm md:text-base font-normal text-gray-600 pb-1">
              {aboutDB[0].mainContent}
            </h2>
            {aboutDB[1].highlightPoints?.map((curr, index) => {
              return (
                <div className="flex gap-2 items-center" key={index}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="red"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                      clipRule="evenodd"
                    />
                  </svg>

                  <h2 className="text-base font-medium text-gray-700">
                    {curr}
                  </h2>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
