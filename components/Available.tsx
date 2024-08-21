import React from "react";

const Available = () => {
  return (
    <>
      <div className="rounded-md h-fit p-5 w-full md:w-3/4 bg-white shadow-lg border-[1px] border-gray-300 justify-self-center">
        <div className="py-3 mt-3 border-b-[1px] border-gray-300 flex flex-col gap-2 ">
          <h2 className="text-xl font-semibold">Corporate Office</h2>
          <div className="flex items-center gap-5">
            <div className="p-2 rounded-full shadow-xl border-2 border-red-500 w-fit h-fit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="red"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="text-base font-medium w-10/12">
                A-124, Raisen Rd, Siddart Lake City, Anandnagar, Bhopal, Madhya
                Pradesh 462022
              </h2>
              <h2 className="text-sm font-normal">
                Mobile No.: +91-7371986179 <br /> E-mail : info@carland.in
              </h2>
            </div>
          </div>
        </div>
        <div className="py-3  flex flex-col gap-2">
          <h2 className="text-xl font-semibold">Branch Office</h2>
          <div className="flex items-center gap-5">
            <div className="p-2 rounded-full shadow-xl border-2 border-red-500 w-fit h-fit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="red"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="text-base font-medium w-10/12">
                Esteem Tower 2,Indrapuri A sector, Sector A, Indrapuri, Bhopal,
                Madhya Pradesh 462022
              </h2>
              <h2 className="text-sm font-normal">
                Mobile No.: +91-7371986179 <br /> E-mail : info@carland.in
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Available;
