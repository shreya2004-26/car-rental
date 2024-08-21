"use client";
import { useContext, useEffect, useState } from "react";
import CarCard from "./CarCard";
import axios from "axios";
import { SearchDataContext } from "@/context/SearchDataContext";
import { CldUploadButton } from "next-cloudinary";
import { useRouter } from "next/navigation";
import { BookingContext } from "@/context/BookingContext";
import { isValid } from "@/utils/ValidFieldFunc";
import { LoginUserContext } from "@/context/LoginUserContext";

const Modal = ({ modal, showModal, selectedCar }: any) => {
  const router = useRouter();
  const [isAllFieldValidState, setIsAllFieldValidState] = useState<any>(1);
  const { searchData }: any = useContext(SearchDataContext);
  const { setBookingData } = useContext(BookingContext);
  const [personalDetails, setPersonalDetails] = useState<any>({
    fname: "",
    lname: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    contactNumber: "",
    dlNumber: "",
    dlImage: "",
    aadharNumber: "",
    aadharImage: "",
  });
  const [bookingDetails, setBookingDetails] = useState<any>({
    pickUpLocation: "",
    pickUpDate: searchData.pickUpDate,
    pickUpTime: "",
    dropOffDate: searchData.dropOffDate,
    dropOffTime: "",
  });
  const [errorMessages, setErrorMessage] = useState<any>(null);
  const [validField, setValidField] = useState<any>({
    pickUpLocation: false,
    pickUpTime: false,
    dropOffTime: false,
    fname: false,
    lname: true,
    address1: false,
    address2: true,
    city: false,
    state: false,
    contactNumber: false,
    dlNumber: false,
    dlImage: false,
    aadharNumber: false,
    aadharImage: false,
  });
  const { loginUser } = useContext(LoginUserContext);
  const handlePersonalDetails = (e: any) => {
    const inputValue = e.target.value;
    setPersonalDetails({ ...personalDetails, [e.target.name]: inputValue });
    const { valid, message }: any = isValid(e.target.name, inputValue);
    setErrorMessage({ ...errorMessages, [e.target.name]: message });
    setValidField({ ...validField, [e.target.name]: valid });
  };
  const handleBooking = (e: any) => {
    const inputValue = e.target.value;
    setBookingDetails({ ...bookingDetails, [e.target.name]: inputValue });
    const { valid, message }: any = isValid(e.target.name, inputValue);
    setErrorMessage({ ...errorMessages, [e.target.name]: message });
    setValidField({ ...validField, [e.target.name]: valid });
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    showModal(false);
    const {
      fname,
      lname,
      address1,
      address2,
      city,
      state,
      contactNumber,
      dlNumber,
      dlImage,
      aadharNumber,
      aadharImage,
    } = personalDetails;
    const { pickUpLocation, pickUpDate, pickUpTime, dropOffDate, dropOffTime } =
      bookingDetails;
    const postData = {
      name: fname + " " + lname,
      address: address1 + " " + address2,
      city,
      state,
      contactNumber,
      aadharNumber,
      aadharImage,
      drivingLicenseNumber: dlNumber,
      drivingLicenseImage: dlImage,
      pickUpLocation,
      pickUpInfo: pickUpDate + "," + pickUpTime,
      dropOffInfo: dropOffDate + "," + dropOffTime,
      vehicleID: selectedCar.id,
      userEmail: loginUser.email,
    };
    const res = await axios.post("/api/booking", postData);
    if (res.status === 200) {
      setBookingData(res.data);
      router.push("/review-pay");
    }
  };
  const isAllFieldValid = () => {
    let obj = Object.keys(validField);
    let isAllValid = 1;
    for (let i = 0; i < obj.length; i++) {
      if (validField[obj[i]] === false) {
        isAllValid = 0;
        break;
      }
    }
    setIsAllFieldValidState(isAllValid);
  };
  useEffect(() => {
    isAllFieldValid();
  }, [validField]);
  return (
    <>
      <dialog id="my_modal_5" className={`${modal ? "modal-open" : ""} modal`}>
        <div className="modal-box w-11/12 max-w-5xl">
          <form method="dialog">
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => showModal(false)}
            >
              ✕
            </button>
          </form>
          <h2 className="font-semibold text-2xl border-b-2 border-gray-200 pb-2">
            Rent A Car Now !
          </h2>
          <div className="py-8 grid grid-cols-1 md:grid-cols-2">
            <div className="w-10/12 pb-5 justify-self-center">
              {selectedCar && <CarCard car={selectedCar} isModal={true} />}
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-1">
                <h2 className="text-base font-medium text-gray-500">
                  Pick Up Location
                </h2>
                <select
                  className="select select-bordered  w-full max-w-xs md:max-w-full bg-transparent text-sm font-medium border-2 border-gray-300 focus:outline-none focus:border-gray-300 bg-white"
                  onChange={(e) => {
                    setValidField({ ...validField, pickUpLocation: true });
                    setBookingDetails({
                      ...bookingDetails,
                      pickUpLocation: e.target.value,
                    });
                  }}
                  defaultValue="0"
                >
                  <option
                    disabled
                    className="outline-none text-base font-medium"
                    value="0"
                  >
                    PickUp Location?
                  </option>
                  {selectedCar?.pickupLocation.map((curr: any, index: any) => {
                    return (
                      <option className="text-base" key={index} value={curr}>
                        {curr}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="grid grid-cols-2 justify-center items-center gap-3">
                <div className="flex flex-col gap-1">
                  <h2 className="text-base font-medium text-gray-500">
                    Pick Up Date
                  </h2>
                  <input
                    type="date"
                    className="input text-sm font-normalplaceholder-gray-700 input-bordered w-full max-w-xs focus:outline-none "
                    value={searchData.pickUpDate}
                    disabled
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <h2 className="text-base font-medium text-gray-500">
                    Drop Off Date
                  </h2>
                  <input
                    type="date"
                    className="input text-sm font-normalplaceholder-gray-700 input-bordered w-full max-w-xs focus:outline-none"
                    value={searchData.dropOffDate}
                    disabled
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 justify-center items-center gap-3">
                <div className="flex flex-col gap-1">
                  <h2 className="text-base font-medium text-gray-500">
                    Pick Up Time
                  </h2>
                  <input
                    type="time"
                    className="input text-sm font-normalplaceholder-gray-700 input-bordered w-full max-w-xs focus:outline-none"
                    name="pickUpTime"
                    onChange={handleBooking}
                  />
                  {!validField.pickUpTime && (
                    <span className="text-xs font-medium px-3 text-red-500">
                      {errorMessages?.pickUpTime}
                    </span>
                  )}
                </div>
                <div className="flex flex-col gap-1">
                  <h2 className="text-base font-medium text-gray-500">
                    Drop Off Time
                  </h2>
                  <input
                    type="time"
                    className="input text-sm font-normalplaceholder-gray-700 input-bordered w-full max-w-xs focus:outline-none"
                    name="dropOffTime"
                    onChange={handleBooking}
                  />
                  {!validField.dropOffTime && (
                    <span className="text-xs font-medium px-3 text-red-500">
                      {errorMessages?.dropOffTime}
                    </span>
                  )}
                </div>
              </div>
              <div className="divider m-0"></div>
              <div className="flex flex-col gap-3">
                <div className="text-lg font-medium text-black">
                  Personal Details
                </div>
                <div className="grid grid-cols-2 justify-center gap-3">
                  <div className="flex flex-col gap-1">
                    <h2 className="text-base font-medium text-gray-500 ">
                      First Name
                    </h2>
                    <input
                      type="text"
                      placeholder="Enter First Name"
                      className="input text-sm font-normalplaceholder-gray-700 input-bordered w-full max-w-xs focus:outline-none "
                      name="fname"
                      onChange={handlePersonalDetails}
                    />
                    {!validField.fname && (
                      <span className="text-xs font-medium text-red-500 w-full">
                        {errorMessages?.fname}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col gap-1">
                    <h2 className="text-base font-medium  text-gray-500">
                      Last Name
                    </h2>
                    <input
                      type="text"
                      placeholder="Enter Last Name"
                      className="input text-sm font-normalplaceholder-gray-700 input-bordered w-full max-w-xs focus:outline-none"
                      name="lname"
                      onChange={handlePersonalDetails}
                    />
                    {!validField.lname && (
                      <span className="text-xs font-medium  text-red-500 w-full">
                        {errorMessages?.lname}
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex flex-col gap-1">
                    <h2 className="text-base font-medium text-gray-500">
                      Address Line 1
                    </h2>
                    <input
                      type="text"
                      placeholder="Flat No or Building Name"
                      className="input text-sm font-normalplaceholder-gray-700 input-bordered w-full max-w-xs md:max-w-full focus:outline-none"
                      name="address1"
                      onChange={handlePersonalDetails}
                    />
                    {!validField.address1 && (
                      <span className="text-xs font-medium px-3 text-red-500">
                        {errorMessages?.address1}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col gap-1 w-full">
                    <h2 className="text-base font-medium text-gray-500">
                      Address Line 2
                    </h2>
                    <input
                      type="text"
                      placeholder="Locality or Village or Sector"
                      className="input text-sm font-normalplaceholder-gray-700 input-bordered w-full max-w-xs md:max-w-full focus:outline-none"
                      name="address2"
                      onChange={handlePersonalDetails}
                    />
                    {!validField.address2 && (
                      <span className="text-xs font-medium px-3 text-red-500">
                        {errorMessages?.address2}
                      </span>
                    )}
                  </div>
                  <div className="grid grid-cols-2 justify-center gap-3">
                    <div className="flex flex-col gap-1">
                      <h2 className="text-base font-medium text-gray-500">
                        City
                      </h2>
                      <input
                        type="text"
                        placeholder="Enter City"
                        className="input text-sm font-normalplaceholder-gray-700 input-bordered w-full max-w-xs focus:outline-none"
                        name="city"
                        onChange={handlePersonalDetails}
                      />
                      {!validField.city && (
                        <span className="text-xs font-medium px-3 text-red-500">
                          {errorMessages?.city}
                        </span>
                      )}
                    </div>
                    <div className="flex flex-col gap-1">
                      <h2 className="text-base font-medium text-gray-500">
                        State
                      </h2>
                      <input
                        type="text"
                        placeholder="Enter State"
                        className="input text-sm font-normalplaceholder-gray-700 input-bordered w-full max-w-xs focus:outline-none"
                        name="state"
                        onChange={handlePersonalDetails}
                      />
                      {!validField.state && (
                        <span className="text-xs font-medium px-3 text-red-500">
                          {errorMessages?.state}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <h2 className="text-base font-medium text-gray-500">
                    Contact Number
                  </h2>
                  <input
                    type="tel"
                    max={10}
                    placeholder="Enter your contact number"
                    className="input text-sm font-normalplaceholder-gray-700 input-bordered w-full max-w-xs md:max-w-full focus:outline-none"
                    name="contactNumber"
                    onChange={handlePersonalDetails}
                  />
                  {!validField.contactNumber && (
                    <span className="text-xs font-medium px-3 text-red-500">
                      {errorMessages?.contactNumber}
                    </span>
                  )}
                </div>
                <div className="grid grid-cols-2 justify-center gap-3">
                  <div className=" flex flex-col gap-1">
                    <h2 className="text-base font-medium text-gray-500">
                      Driving License
                    </h2>
                    <input
                      type="text"
                      placeholder="Driving License Number"
                      className="input text-sm font-normalplaceholder-gray-700 input-bordered w-full max-w-xs focus:outline-none"
                      name="dlNumber"
                      onChange={handlePersonalDetails}
                    />
                    {!validField.dlNumber && (
                      <span className="text-xs font-medium px-3 text-red-500">
                        {errorMessages?.dlNumber}
                      </span>
                    )}
                  </div>
                  <div className=" flex flex-col gap-1 pt-7">
                    <CldUploadButton
                      options={{ multiple: false }}
                      uploadPreset={
                        process.env.NEXT_PUBLIC_CLOUDINARY_PRESET_NAME
                      }
                      onUpload={(res: any) => {
                        if (res?.event === "success") {
                          setValidField({ ...validField, dlImage: true });
                          setPersonalDetails({
                            ...personalDetails,
                            dlImage: res?.info?.secure_url,
                          });
                        } else {
                          setValidField({ ...validField, dlImage: false });
                        }
                      }}
                      className={`file-input text-sm font-normal placeholder-gray-700 file-input-bordered w-full max-w-xs ${
                        validField.dlImage ? "bg-green-700 text-white" : ""
                      }`}
                    >
                      <span>Upload Driving License</span>
                    </CldUploadButton>
                  </div>
                </div>
                <div className="grid grid-cols-2 justify-center gap-3">
                  <div className=" flex flex-col gap-1">
                    <h2 className="text-base font-medium text-gray-500">
                      Aadhar Card
                    </h2>
                    <input
                      type="text"
                      placeholder="Aadhar Card Number"
                      className="input text-sm font-normal placeholder-gray-700 input-bordered w-full max-w-xs focus:outline-none"
                      name="aadharNumber"
                      onChange={handlePersonalDetails}
                    />
                    {!validField.aadharNumber && (
                      <span className="text-xs font-medium px-3 text-red-500">
                        {errorMessages?.aadharNumber}
                      </span>
                    )}
                  </div>
                  <div className=" flex flex-col gap-1 pt-7">
                    <CldUploadButton
                      options={{ multiple: true }}
                      uploadPreset={
                        process.env.NEXT_PUBLIC_CLOUDINARY_PRESET_NAME
                      }
                      onUpload={(res: any) => {
                        if (res?.event === "success") {
                          setValidField({ ...validField, aadharImage: true });
                          setPersonalDetails({
                            ...personalDetails,
                            aadharImage: res?.info?.secure_url,
                          });
                        } else {
                          setValidField({ ...validField, aadharImage: false });
                        }
                      }}
                      className={`file-input text-sm font-normal placeholder-gray-700 file-input-bordered w-full max-w-xs ${
                        validField.aadharImage ? "bg-green-700 text-white" : ""
                      }`}
                    >
                      <span>Upload Aadhar Card</span>
                    </CldUploadButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-action">
            <form method="dialog" className="flex gap-3">
              <button
                className="btn btn-outline"
                onClick={() => showModal(false)}
              >
                Close
              </button>
              <button
                className="btn btn-primary"
                onClick={handleSubmit}
                disabled={isAllFieldValidState == 1 ? false : true}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default Modal;
