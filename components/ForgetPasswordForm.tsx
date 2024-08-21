"use client";

import { RegisterUserContext } from "@/context/RegisterUserContext";
import { isValid } from "@/utils/ValidFieldFunc";
import { getUser } from "@/utils/getUser";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { toast } from "react-toastify";

const ForgetPasswordForm = () => {
  const { registerUserData, setRegisterUserData } =
    useContext(RegisterUserContext);
  const [isValidEmail, setValidEmail] = useState<any>(false);
  const [errorEmailMessage, setErrorEmailMessage] = useState<any>("");
  const router = useRouter();
  const handleInput = (e: any) => {
    const email = e.target.value;
    setRegisterUserData({ ...registerUserData, email });
    const { valid, message }: any = isValid("email", email);
    setValidEmail(valid);
    setErrorEmailMessage(message);
  };
  const sendOTP = async (arg: any, otp: any) => {
    const { data } = await axios.post("/api/forgotPassword", {
      email: arg,
      otp,
    });
    return data;
  };
  const handleSubmit = async () => {
    const user = await getUser(registerUserData.email);
    if (user === null) {
      toast.error("User is not registered.");
      return;
    } else {
      //generate otp
      const otp = Math.floor(Math.random() * 10000);
      setRegisterUserData({ ...registerUserData, otp });
      //if user exist
      //send OTP
      await sendOTP(registerUserData.email, otp);

      toast.success("OTP is sucessfully sent");
      router.push("/submitOTP");
    }
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full">
        <h2 className="text-xl font-semibold pb-7">Forgot Password</h2>
        <div className="flex flex-col gap-5 w-full">
          <div className="flex flex-col gap-3 w-full">
            <div className="flex flex-col">
              <input
                type="email"
                placeholder="Email"
                className="input text-sm font-normal placeholder-gray-600 input-bordered w-full focus:outline-none"
                name="email"
                onChange={handleInput}
              />
              {!isValidEmail && (
                <span className="text-xs font-medium px-3 text-red-500">
                  {errorEmailMessage}
                </span>
              )}
            </div>
          </div>
          <button
            className="px-5 py-3 rounded-md border-2 border-red-400 bg-red-500 text-white text-base font-semibold"
            onClick={handleSubmit}
            disabled={!isValidEmail}
          >
            Send OTP
          </button>
        </div>
      </div>
    </>
  );
};

export default ForgetPasswordForm;
