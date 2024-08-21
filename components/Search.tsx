"use client";
import { SearchDataContext } from "@/context/SearchDataContext";
import { useContext, useState } from "react";
import axios from "axios";
import { CarsContext } from "@/context/CarsContext";
import { useRouter } from "next/navigation";
const Search = () => {
  const { searchData, setSearchData }: any = useContext(SearchDataContext);
  const { setCarsList }: any = useContext(CarsContext);
  const router = useRouter();
  const handleSearchBtn = async (e: any) => {
    const result = await axios.post("/api/car", searchData);
    setCarsList(result.data);
    router.push("/booking");
  };
  const today: any = new Date().toISOString().split("T")[0];
  const [minDropDate, setMinDropDate] = useState<any>(null);
  return (
    <div className="flex justify-center w-full pb-7 pt-5 px-5 sm:px-10 md:px-20 bg-white">
      <div className="flex flex-col gap-4 items-center">
        <div className="text-xl font-medium text-gray-500">
          Lets Search what you need
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 px-5 py-6 gap-5 md:gap-52 rounded-lg items-center bg-white shadow-md border-2 border-gray-200">
          <div className="flex flex-col gap-2 w-full">
            <h2 className="text-base font-semibold px-2">City</h2>
            <select
              className="select select-bordered w-full md:w-fit max-w-xs bg-transparent text-sm font-medium  focus:outline-none focus:border-gray-300 bg-white"
              onChange={(e: any) =>
                setSearchData({ ...searchData, city: e.target.value })
              }
              defaultValue="0"
            >
              <option
                disabled
                className="outline-none text-base font-medium"
                value="0"
              >
                Select City
              </option>
              <option className="text-base" value="Bhopal">
                Bhopal
              </option>
              <option className="text-base" value="Indore">
                Indore
              </option>
              <option className="text-base" value="Khargone">
                Khargone
              </option>
              <option className="text-base" value="Jabalpur">
                Jabalpur
              </option>
              <option className="text-base" value="Gwalior">
                Gwalior
              </option>
            </select>
          </div>
          <div className="flex justify-between md:gap-5">
            <div className="flex flex-col gap-2">
              <h2 className="text-base font-semibold pl-2">Pick Up Date</h2>
              <input
                type="date"
                className="input placeholder-gray-700 input-bordered w-3/4 md:w-full max-w-xs focus:outline-none "
                min={today}
                onChange={(e) => {
                  setMinDropDate(e.target.value);
                  setSearchData({ ...searchData, pickUpDate: e.target.value });
                }}
              />
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-base font-semibold pl-2">Drop Off Date</h2>
              <input
                type="date"
                className="input placeholder-gray-700 input-bordered w-3/4 md:w-full max-w-xs focus:outline-none"
                min={minDropDate === null ? today : minDropDate}
                onChange={(e) => {
                  setSearchData({ ...searchData, dropOffDate: e.target.value });
                }}
              />
            </div>
          </div>
          <button
            className="text-lg font-semibold text-white bg-gradient-to-r from-red-800 to-red-500 h-max py-2 px-5 rounded-lg w-max justify-self-center md:justify-self-end"
            onClick={handleSearchBtn}
            disabled={
              !searchData.city ||
              !searchData.pickUpDate ||
              !searchData.dropOffDate
            }
          >
            Search for Car
          </button>
        </div>
      </div>
    </div>
  );
};
export default Search;
