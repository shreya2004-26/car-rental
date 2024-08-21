"use context";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
const Header = ({ loginUser }: any) => {
  const path = usePathname();
  const router = useRouter();

  return (
    <>
      <div
        className={` justify-between p-5 items-center border-b-2 shadow-sm ${
          !loginUser && path === "/" ? "hidden" : "hidden md:flex"
        }`}
      >
        <div>
          <Image src="/logo.svg" alt="Logo" width="100" height="10" />
        </div>
        <div
          className="flex  w-max gap-6
      . cursor-pointer"
        >
          <Link
            className="text-base text-gray-600 font-semibold cursor-pointer hover:text-black hover:border-b-[3px] border-red-600"
            href="/"
          >
            Home
          </Link>
          <Link
            className="text-base text-gray-600 font-semibold cursor-pointer hover:text-black hover:border-b-[3px] border-red-600"
            href="/about"
          >
            About
          </Link>
          <Link
            className="text-base text-gray-600 font-semibold cursor-pointer hover:text-black hover:border-b-[3px] border-red-600"
            href="/bookings"
          >
            Booking
          </Link>
          <Link
            className="text-base text-gray-600 font-semibold cursor-pointer hover:text-black hover:border-b-[3px] border-red-600"
            href="/privacy-policy"
          >
            Privacy Policy
          </Link>
          <Link
            className="text-base text-gray-600 font-semibold cursor-pointer hover:text-black hover:border-b-[3px] border-red-600"
            href="/terms-conditions"
          >
            Terms & Conditions
          </Link>
          <Link
            className="text-base text-gray-600 font-semibold cursor-pointer hover:text-black hover:border-b-[3px] border-red-600"
            href="/contact-us"
          >
            Contact Us
          </Link>
        </div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              {loginUser?.image === "undefined" ? (
                <Image
                  src={"https://github.com/shadcn.png"}
                  alt="User Avatar"
                  width={2000}
                  height={2000}
                />
              ) : (
                <img
                  src={loginUser?.image ?? "https://github.com/shadcn.png"}
                  alt="User Avatar"
                />
              )}
            </div>
          </div>
          <ul
            tabIndex={0}
            className=" z-[1] shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 mt-3"
          >
            <li className="flex flex-col gap-1 m-0 p-0">
              <h2 className="text-base font-medium text-gray-700">
                {loginUser?.name ?? "Anonymous"}
              </h2>
              <h2 className="text-xs font-medium text-gray-500">
                {loginUser?.email.slice(0, 30) ?? "null@gmail.com"}
              </h2>
            </li>
            <li onClick={() => signOut()} className="py-3">
              <a className="text-base font-medium text-gray-600">Logout</a>
            </li>
          </ul>
        </div>
      </div>
      <div
        className={`navbar bg-base-100 ${
          !loginUser && path === "/" ? "hidden" : "md:hidden"
        }`}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link
                  className="text-base text-gray-600 font-semibold cursor-pointer hover:text-black "
                  href="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="text-base text-gray-600 font-semibold cursor-pointer hover:text-black"
                  href="/about"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className="text-base text-gray-600 font-semibold cursor-pointer hover:text-black"
                  href="/bookings"
                >
                  Booking
                </Link>
              </li>
              <li>
                <Link
                  className="text-base text-gray-600 font-semibold cursor-pointer hover:text-black"
                  href="/privacy-policy"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  className="text-base text-gray-600 font-semibold cursor-pointer hover:text-black "
                  href="/terms-conditions"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  className="text-base text-gray-600 font-semibold cursor-pointer hover:text-black"
                  href="/contact-us"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <a className="btn btn-ghost text-xl">
            <Image src="/logo.svg" alt="Logo" width="100" height="10" />
          </a>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                {loginUser?.image === "undefined" ? (
                  <Image
                    src={"https://github.com/shadcn.png"}
                    alt="User Avatar"
                    width={2000}
                    height={2000}
                  />
                ) : (
                  <img
                    src={loginUser?.image ?? "https://github.com/shadcn.png"}
                    alt="User Avatar"
                  />
                )}
              </div>
            </div>
            <ul
              tabIndex={0}
              className=" z-[1] shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 mt-3"
            >
              <li className="flex flex-col gap-1 m-0 p-0">
                <h2 className="text-base font-medium text-gray-700">
                  {loginUser?.name ?? "Anonymous"}
                </h2>
                <h2 className="text-[13px] font-medium text-gray-500 ">
                  {loginUser?.email ?? "null@gmail.com"}
                </h2>
              </li>
              <li className="py-3">
                <a
                  className="text-base font-medium text-gray-600"
                  onClick={() => {
                    router.push("/");
                    signOut();
                  }}
                >
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
