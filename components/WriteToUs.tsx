"use client";
import axios from "axios";
import React, { useState } from "react";
const WriteToUs = () => {
  const [formValue, setFormValue] = useState<any>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const handleSubmit = async () => {
    const res = await axios.post("/api/message", formValue);
    if (res.status == 200) {
      setFormValue({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }
  };
  const handleInput = (e: any) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };
  return (
    <div className="flex flex-col items-center p-5 border-2 rounded-md shadow-md w-11/12 md:w-3/4 gap-8 bg-[#F1F2F6]">
      <h2 className="text-2xl font-semibold">Write to Us:</h2>
      <div className="flex flex-col gap-5 w-full md:w-3/4 px-0 md:px-10 py-5">
        <div className="flex justify-between gap-5 w-full">
          <input
            type="text"
            placeholder="Your name"
            className="input input-bordered w-full max-w-xs focus:outline-none placeholder:text-gray-600"
            name="name"
            onChange={handleInput}
          />
          <input
            type="email"
            placeholder="Your email"
            className="input input-bordered w-full max-w-xs focus:outline-none placeholder:text-gray-600"
            name="email"
            onChange={handleInput}
          />
        </div>
        <div className="flex justify-between gap-5 w-full">
          <input
            type="tel"
            placeholder="Your phone"
            className="input input-bordered w-full max-w-xs focus:outline-none placeholder:text-gray-600"
            name="phone"
            onChange={handleInput}
          />
          <input
            type="text"
            placeholder="Subject"
            className="input input-bordered w-full max-w-xs focus:outline-none placeholder:text-gray-600"
            name="subject"
            onChange={handleInput}
          />
        </div>
        <div className="flex justify-center w-full">
          <textarea
            name="message"
            placeholder="Your Message"
            id=""
            rows={5}
            className="border-[2px] rounded-md w-full p-3 focus:outline-none resize-none placeholder:text-gray-600"
            style={{ scrollbarWidth: "none" }}
            onChange={handleInput}
          ></textarea>
        </div>
        <center>
          <button
            className="w-fit py-3 px-5 text-white bg-red-500 text-base font-medium text-center "
            disabled={
              !formValue.name ||
              !formValue.email ||
              !formValue.phone ||
              !formValue.subject ||
              !formValue.message
            }
            onClick={handleSubmit}
          >
            Send Message
          </button>
        </center>
      </div>
    </div>
  );
};

export default WriteToUs;
