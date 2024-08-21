"use client";
import { signIn } from "next-auth/react";
const LoginAlternateOption = () => {
  return (
    <div className="flex flex-col gap-3">
      <div className="divider text-gray-600">Or</div>
      <div className="flex flex-col gap-5">
        <div
          className="border-[1px] bg-white border-[#CACACA] text-gray-700 flex p-3 items-center justify-evenly rounded-md cursor-pointer text-base font-semibold"
          onClick={() => signIn("google")}
        >
          <img
            src="https://res.cloudinary.com/ddzlhdlda/image/upload/v1702476682/1200px-Google__22G_22_logo.svg_qo1yvp.png"
            alt="Google logo"
            className="h-[24px]"
          />
          <h2>Login with Google</h2>
        </div>
      </div>
    </div>
  );
};

export default LoginAlternateOption;
