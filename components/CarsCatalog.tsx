"use client";
import React, { useContext, useEffect, useState } from "react";
import CarCard from "./CarCard";
import { CarsContext } from "@/context/CarsContext";
import { useRouter } from "next/navigation";

const CarsCatalog = () => {
  const router = useRouter();
  const { carsList } = useContext(CarsContext);
  const [carsCopyList, setCarsCopyList] = useState<any>(carsList);
  const [priceFilter, setPriceFilter] = useState<any>(null);
  const [manufactureFilter, setManufactureFilter] = useState<any>(null);
  useEffect(() => {
    setCarsCopyList(carsList);
  }, [carsList]);
  useEffect(() => {}, [priceFilter || manufactureFilter]);
  const handlePriceFilter = (e: any) => {
    const val = e.target.value;
    setPriceFilter(val);
    if (val === "-1") {
      setCarsCopyList(
        carsCopyList.sort((c1: any, c2: any) => c1.dailyPrice - c2.dailyPrice)
      );
    } else {
      setCarsCopyList(
        carsCopyList.sort((c1: any, c2: any) => c2.dailyPrice - c1.dailyPrice)
      );
    }
  };
  const handleManufactureFilter = (e: any) => {
    const val = e.target.value;
    setManufactureFilter(val);
    if (val === "All") {
      setCarsCopyList(carsList);
    } else {
      setCarsCopyList(
        carsList.filter((curr: any) => curr.manufactureCompany === val)
      );
    }
  };
  const handleSubmit = () => {
    router.push("/");
  };
  const handleResetFilter = () => {
    setManufactureFilter("All");
    setPriceFilter(0);
  };
  return (
    <>
      {!carsList ? (
        <main className="flex min-w-full justify-center items-center">
          <div className="flex flex-col items-center pt-20">
            <img
              src="https://res.cloudinary.com/ddzlhdlda/image/upload/v1701796475/CarRental/resetCarFilter_htbxnz.svg"
              alt="Car Not Found"
              className="w-[140px]"
            />
            <div className="flex flex-col items-center gap-1">
              <h2 className="text-2xl font-bold">No cars found</h2>
              <h2 className="text-base font-normal text-gray-500">
                Try Again by select city and adjusting pick-up and drop-off
                date.
              </h2>
              <button
                className="text-white text-base font-medium px-5 py-3 rounded-md bg-red-500 w-fit my-5"
                onClick={handleSubmit}
              >
                Search Again
              </button>
            </div>
          </div>
        </main>
      ) : (
        <div className="flex flex-col gap-4 py-10">
          <div className="grid grid-cols-1 md:flex justify-between items-center gap-3">
            <div className="flex flex-col gap-1">
              <div className="text-2xl font-bold">Cars Catalog</div>
              <div className="text-base font-medium">
                Explore our cars you might likes
              </div>
            </div>
            <div className="flex gap-2">
              <select
                className="select w-full md:w-fit max-w-xs bg-transparent text-base font-medium border-2 border-black focus:outline-none focus:border-black"
                onChange={handlePriceFilter}
                defaultValue="0"
              >
                <option
                  disabled
                  className="outline-none text-base font-medium"
                  value="0"
                >
                  Price
                </option>
                <option className="text-base" value="-1">
                  Low to High
                </option>
                <option className="text-base" value="1">
                  High to Low
                </option>
              </select>
              <select
                className="select w-full md:w-fit max-w-xs bg-transparent text-base font-medium border-2 border-black focus:outline-none focus:border-black"
                onChange={handleManufactureFilter}
                defaultValue="0"
              >
                <option
                  disabled
                  className="outline-none text-base font-medium"
                  value="0"
                >
                  Manufacture
                </option>
                <option className="text-base" value="All">
                  All Car
                </option>
                <option className="text-base" value="Honda">
                  Honda
                </option>
                <option className="text-base" value="Mazda">
                  Mazda
                </option>
                <option className="text-base" value="BMW">
                  BMW
                </option>
                <option className="text-base" value="Lexus">
                  Lexus
                </option>
                <option className="text-base" value="Toyota">
                  Toyota
                </option>
                <option className="text-base" value="Volvo">
                  Volvo
                </option>
              </select>
            </div>
          </div>
          {carsCopyList?.length === 0 ? (
            <center className="flex flex-col items-center pt-10 gap-3 ">
              <img src="/noCar.png" alt="no-car" />
              <div className="flex flex-col gap-1">
                <h2 className="text-2xl font-bold">No cars found</h2>
                <h2 className="text-lg font-normal text-gray-500">
                  Try changing your filters
                </h2>
              </div>
            </center>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-4 mt-5 gap-2 md:gap-5">
              {carsCopyList.map((curr: any, index: any) => {
                return <CarCard car={curr} key={index} isModal={false} />;
              })}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default CarsCatalog;
