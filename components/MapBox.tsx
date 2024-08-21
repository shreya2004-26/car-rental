import React from "react";

const MapBox = () => {
  return (
    <div className=" w-full justify-self-center">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14663.739821056082!2d77.45872335!3d23.245453899999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1701869108851!5m2!1sen!2sin"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="rounded-md border-[1px] border-gray-300 h-[240px] md:h-[420px]  w-full md:w-4/5"
      ></iframe>
    </div>
  );
};

export default MapBox;
