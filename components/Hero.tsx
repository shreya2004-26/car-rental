const Hero = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 justify-around py-8 items-center gap-5 md:gap-2 px-5 sm:px-10 md:px-20">
      <div className="col-span-2 w-full md:w-1/2 order-2 md:order-1 flex flex-col gap-4">
        <h2 className="text-3xl md:text-5xl font-extrabold leading-tight md:leading-tight text-black">
          Premium Car <span className="text-red-600">Rental</span> in Your Area
        </h2>
        <h2 className="text-lg font-medium text-gray-400">
          Book the selected car effortlessly. Pay for Driving Only, Book the Car
          Now
        </h2>
        <button className="text-base font-medium bg-red-500 text-white px-4 py-2 rounded-full hover:scale-105 cursor-pointer my-5 w-fit">
          Explore Cars
        </button>
      </div>
      <div className="col-span-1 order-1 md:order-2">
        <img
          src="/car.svg"
          alt="Hero Car"
          className={`min-w-4/5 md:min-w-2/3 h-full`}
        />
      </div>
    </div>
  );
};

export default Hero;
