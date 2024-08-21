import { changeDateTimeFormat } from "@/utils/DateFunc";

const RentDetails = ({ bookingData }: any) => {
  const {
    pickupLocation,
    pickUpInfo,
    dropOffInfo,
    id,
    name,
    address,
    city,
    state,
    contactNumber,
    drivingLicenseNumber,
    aadharNumber,
    car,
  } = bookingData;
  return (
    <div className="flex flex-col gap-5 items-center justify-self-center">
      <div className=" p-5 rounded-md border-2 border-gray-200 flex flex-col gap-5 shadow-md">
        <h2 className="text-xl font-semibold text-center">My Rental Deal</h2>
        <div className="grid grid-cols-1 md:flex items-center gap-3">
          <div className="w-fit justify-self-center">
            <img src={car.imgSrc} alt="car" className="h-[100px]" />
          </div>
          <div className="grid grid-cols-2">
            <div className="flex flex-col gap-1 border-r-2 border-gray-200 px-5">
              <h2 className="text-base font-semibold">Pick-Up</h2>
              <h2 className="text-sm font-medium text-gray-700">
                {pickupLocation}
              </h2>
              <h2 className="text-base font-semibold">
                {changeDateTimeFormat(pickUpInfo)}
              </h2>
            </div>
            <div className="flex flex-col gap-1 px-5">
              <h2 className="text-base font-semibold">Drop Off</h2>
              <h2 className="text-sm font-medium text-gray-700">
                {pickupLocation}
              </h2>
              <h2 className="text-base font-semibold">
                {changeDateTimeFormat(dropOffInfo)}
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className=" p-5 rounded-md border-2 border-gray-200 flex flex-col gap-5 shadow-md w-full">
        <h2 className="text-xl font-semibold text-center">Booking Details</h2>
        <div className="flex flex-col">
          <div className="grid grid-cols-2 items-center border-b-[1px] border-gray-100 py-3">
            <h2 className="text-base font-medium">Booking ID</h2>
            <h2 className="text-sm font-medium justify-self-end md:justify-self-auto">
              {id}
            </h2>
          </div>
          <div className="grid grid-cols-2 items-center border-b-[1px] border-gray-100 py-3">
            <h2 className="text-base font-medium">Name</h2>
            <h2 className="text-sm font-medium">{name}</h2>
          </div>
          <div className="grid grid-cols-2 items-center border-b-[1px] border-gray-100 py-3">
            <h2 className="text-base font-medium">Address</h2>
            <h2 className="text-sm font-medium">
              {address + " " + city + " " + state}
            </h2>
          </div>
          <div className="grid grid-cols-2 items-center border-b-[1px] border-gray-100 py-3">
            <h2 className="text-base font-medium">Contact Number</h2>
            <h2 className="text-sm font-medium">+91 {contactNumber}</h2>
          </div>
          <div className="grid grid-cols-2 items-center border-b-[1px] border-gray-100 py-3">
            <h2 className="text-base font-medium">Driving License</h2>
            <h2 className="text-sm font-medium">{drivingLicenseNumber}</h2>
          </div>
          <div className="grid grid-cols-2 items-center border-b-[1px] border-gray-100 py-3">
            <h2 className="text-base font-medium">Aadhar Card</h2>
            <h2 className="text-sm font-medium">{aadharNumber}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RentDetails;
