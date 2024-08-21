"use client";
import { RegisterUserContext } from "@/context/RegisterUserContext";
import { useRouter } from "next/navigation";
import React, { useContext, useState } from "react";
import { toast } from "react-toastify";

const SubmitOTPForm = () => {
  const [otp, setOtp] = useState<any>(null);
  const { registerUserData } = useContext(RegisterUserContext);
  const router = useRouter();
  const handleInput = (e: any) => {
    setOtp(e.target.value);
  };
  const handleSubmit = () => {
    if (otp != registerUserData.otp) {
      toast.error("Invalid OTP");
      return;
    }
    router.push("/changePassword");
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full">
        <h2 className="text-xl font-semibold pb-7">Submit OTP</h2>
        <div className="flex flex-col gap-5 w-full">
          <div className="flex flex-col gap-3 w-full">
            <div className="flex flex-col">
              <input
                type="text"
                placeholder="Enter OTP"
                className="input text-sm font-normal placeholder-gray-600 input-bordered w-full focus:outline-none"
                name="otp"
                onChange={handleInput}
              />
            </div>
          </div>
          <button
            className="px-5 py-3 rounded-md border-2 border-red-400 bg-red-500 text-white text-base font-semibold"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default SubmitOTPForm;
