"use client";
import { useState } from "react";
import Modal from "./Modal";

const CarCard = ({ car, isModal }: any) => {
  const [modal, showModal] = useState<any>(false);
  const [selectedCar, setSelectedCar] = useState<any>(null);
  return (
    <>
      <div className="group grid  gap-2 border-2 rounded-xl p-3 md:p-6 cursor-pointer  bg-gray-50 ">
        <div className="flex flex-col gap-1">
          <h2 className="text-xl font-semibold">{car.model}</h2>
          <h2 className="text-sm font-normal">
            ₹ <span className="text-xl font-semibold">{car.dailyPrice}</span>
            /day
          </h2>
        </div>
        <div>
          {isModal ? (
            <img
              src={car.imgSrc}
              alt="Honda Civic"
              className="w-full hover:scale-110"
            />
          ) : (
            <img src={car.imgSrc} alt="Honda Civic" className="w-full" />
          )}
        </div>

        {!isModal ? (
          <>
            <div className="flex justify-between text-gray-500 items-end group-hover:hidden">
              <div className="flex flex-col items-center gap-1">
                <img
                  src="https://res.cloudinary.com/ddzlhdlda/image/upload/v1701794081/CarRental/iconDiesel_bxgqd1.svg"
                  alt="Petrol/Diesal"
                  className="w-[14px] h-[14px] md:w-[18px] md:h-[18px] mb-2"
                />
                <div className="text-xs md:text-base font-medium text-gray-500">
                  Petrol
                </div>
              </div>
              <div className="flex flex-col items-center gap-1">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  className="text-[18px] md:text[22px] mb-2"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M7.59 5.41c-.78-.78-.78-2.05 0-2.83.78-.78 2.05-.78 2.83 0 .78.78.78 2.05 0 2.83-.79.79-2.05.79-2.83 0zM6 16V7H4v9c0 2.76 2.24 5 5 5h6v-2H9c-1.66 0-3-1.34-3-3zm14 4.07L14.93 15H11.5v-3.68c1.4 1.15 3.6 2.16 5.5 2.16v-2.16c-1.66.02-3.61-.87-4.67-2.04l-1.4-1.55c-.19-.21-.43-.38-.69-.5-.29-.14-.62-.23-.96-.23h-.03C8.01 7 7 8.01 7 9.25V15c0 1.66 1.34 3 3 3h5.07l3.5 3.5L20 20.07z"></path>
                </svg>
                <div className="text-xs md:text-base font-medium text-gray-500">
                  {car.seat} Seats
                </div>
              </div>
              <div className="flex flex-col items-center gap-1">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  className="text-[18px] md:text[22px] mb-2"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M336 448H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h320c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm157.2-340.7l-81-81c-6.2-6.2-16.4-6.2-22.6 0l-11.3 11.3c-6.2 6.2-6.2 16.4 0 22.6L416 97.9V160c0 28.1 20.9 51.3 48 55.2V376c0 13.2-10.8 24-24 24s-24-10.8-24-24v-32c0-48.6-39.4-88-88-88h-8V64c0-35.3-28.7-64-64-64H96C60.7 0 32 28.7 32 64v352h288V304h8c22.1 0 40 17.9 40 40v27.8c0 37.7 27 72 64.5 75.9 43 4.3 79.5-29.5 79.5-71.7V152.6c0-17-6.8-33.3-18.8-45.3zM256 192H96V64h160v128z"></path>
                </svg>
                <div className="text-xs md:text-base font-medium text-gray-500">
                  {car.milege} MPG
                </div>
              </div>
            </div>
            <div className="hidden group-hover:flex justify-center items-end w-full">
              <button
                className="text-lg font-semibold text-white bg-gradient-to-r from-red-800 to-red-500 px-3 py-2 rounded-lg w-full flex justify-between"
                onClick={() => {
                  showModal(true);
                  setSelectedCar(car);
                }}
              >
                <div>Rent Now</div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </button>
            </div>
          </>
        ) : (
          <div className="flex justify-between text-gray-500 items-end">
            <div className="flex flex-col items-center gap-1">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 256 256"
                className="text-[18px] md:text[22px] mb-2"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM49.63,168H90.45l17,45.58A88.35,88.35,0,0,1,49.63,168ZM128,156a16,16,0,1,1,16-16A16,16,0,0,1,128,156Zm20.46,57.59L165.55,168h40.82A88.34,88.34,0,0,1,148.46,213.59ZM128,96a136.38,136.38,0,0,0-88,32.33V128a88,88,0,0,1,176,0v.33A136.38,136.38,0,0,0,128,96Z"></path>
              </svg>
              <div className="text-sm md:text-base font-medium text-gray-500">
                Auto
              </div>
            </div>
            <div className="flex flex-col items-center gap-1">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                className="text-[18px] md:text[22px] mb-2"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M7.59 5.41c-.78-.78-.78-2.05 0-2.83.78-.78 2.05-.78 2.83 0 .78.78.78 2.05 0 2.83-.79.79-2.05.79-2.83 0zM6 16V7H4v9c0 2.76 2.24 5 5 5h6v-2H9c-1.66 0-3-1.34-3-3zm14 4.07L14.93 15H11.5v-3.68c1.4 1.15 3.6 2.16 5.5 2.16v-2.16c-1.66.02-3.61-.87-4.67-2.04l-1.4-1.55c-.19-.21-.43-.38-.69-.5-.29-.14-.62-.23-.96-.23h-.03C8.01 7 7 8.01 7 9.25V15c0 1.66 1.34 3 3 3h5.07l3.5 3.5L20 20.07z"></path>
              </svg>
              <div className="text-sm md:text-base font-medium text-gray-500">
                {car.seat} Seats
              </div>
            </div>
            <div className="flex flex-col items-center gap-1">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                className="text-[18px] md:text[22px] mb-2"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M336 448H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h320c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm157.2-340.7l-81-81c-6.2-6.2-16.4-6.2-22.6 0l-11.3 11.3c-6.2 6.2-6.2 16.4 0 22.6L416 97.9V160c0 28.1 20.9 51.3 48 55.2V376c0 13.2-10.8 24-24 24s-24-10.8-24-24v-32c0-48.6-39.4-88-88-88h-8V64c0-35.3-28.7-64-64-64H96C60.7 0 32 28.7 32 64v352h288V304h8c22.1 0 40 17.9 40 40v27.8c0 37.7 27 72 64.5 75.9 43 4.3 79.5-29.5 79.5-71.7V152.6c0-17-6.8-33.3-18.8-45.3zM256 192H96V64h160v128z"></path>
              </svg>
              <div className="text-sm md:text-base font-medium text-gray-500">
                {car.milege} MPG
              </div>
            </div>
          </div>
        )}
      </div>
      <Modal modal={modal} showModal={showModal} selectedCar={selectedCar} />
    </>
  );
};

export default CarCard;
