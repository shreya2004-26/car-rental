"use client";
import { isValid } from "@/utils/ValidFieldFunc";
import { getUser } from "@/utils/getUser";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const LoginForm = ({ setIsRefresh, setLoginUser }: any) => {
  const router = useRouter();
  const [formValue, setFormValue] = useState<any>({ email: "", password: "" });
  const [errorMessages, setErrorMessage] = useState<any>(null);
  const [validField, setValidField] = useState<any>({
    email: false,
    password: false,
  });
  const [isAllFieldValidState, setIsAllFieldValidState] = useState<any>(1);
  const [showPassword, setShowPassword] = useState<Boolean>(true);
  const handleInput = (e: any) => {
    const inputValue = e.target.value;
    setFormValue({ ...formValue, [e.target.name]: inputValue });
    const { valid, message }: any = isValid(e.target.name, inputValue);
    setErrorMessage({ ...errorMessages, [e.target.name]: message });
    setValidField({ ...validField, [e.target.name]: valid });
  };
  const handleSubmit = async () => {
    const { email, password } = formValue;
    //api call
    const user = await getUser(email);
    if (user === null) {
      toast.error("User is not registered.");
      return;
    }
    if (user.password !== password) {
      toast.error("Invalid login crediantial");
      return;
    }
    toast.success("User is successfully login.");
    setLoginUser(user);
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
    <div className="flex flex-col items-center justify-center w-full">
      <h2 className="text-xl font-semibold pb-7">Login</h2>
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
            {!validField.email && (
              <span className="text-xs font-medium px-3 text-red-500">
                {errorMessages?.email}
              </span>
            )}
          </div>
          <div className="flex flex-col">
            <div className="flex justify-between border-[1px] text-slate-900 rounded-lg items-center px-3">
              <input
                type={`${showPassword ? "password" : "text"}`}
                placeholder="Password"
                className="input text-sm font-normal placeholder-gray-600  w-full focus:outline-none border-none px-0"
                name="password"
                onChange={handleInput}
              />
              {showPassword ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 cursor-pointer"
                  onClick={() => setShowPassword(false)}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 cursor-pointer"
                  onClick={() => setShowPassword(true)}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                  />
                </svg>
              )}
            </div>

            {!validField.password && (
              <span className="text-xs font-medium px-3 text-red-500">
                {errorMessages?.password}
              </span>
            )}
          </div>
          <h2
            className="text-sm font-medium text-red-400 text-center cursor-pointer"
            onClick={() => router.push("/forgotPassword")}
          >
            Forgot Password?
          </h2>
        </div>
        <button
          className="px-5 py-3 rounded-md border-2 border-red-400 bg-red-500 text-white text-base font-semibold"
          onClick={handleSubmit}
          disabled={isAllFieldValidState == 1 ? false : true}
        >
          Login
        </button>
        <h2 className="text-sm font-medium text-gray-400 text-center">
          Don't have an account?{" "}
          <Link href="/register">
            <span className="text-red-400">Register Now</span>
          </Link>
        </h2>
      </div>
    </div>
  );
};

export default LoginForm;
