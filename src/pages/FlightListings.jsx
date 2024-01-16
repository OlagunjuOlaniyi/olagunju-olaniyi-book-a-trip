import React from "react";
import ArrowBack from "../assets/icons/arrow-back.png";
import Line from "../assets/icons/line.png";
import Time from "../assets/icons/date.svg";
import { Link } from "react-router-dom";

const FlightListings = () => {
  return (
    <div>
      <div className="flex items-center gap-10 mb-3 ">
        <Link to="/" className="flex-none text-center">
          <img className="h-full" src={ArrowBack} alt="" />
        </Link>
        <h1 className="text-[22px] flex-grow-1 text-center font-bold w-90">
          Flight Listings
        </h1>
      </div>
      {/* info */}
      <div className="bg-[#fff] p-3 mt-3">
        <div className="p-4">
          <img className="mx-auto" src={Line} alt="" />
        </div>
        <div className="flex justify-between mt-4">
          <div>
            <h1 className="font-bold text-[20px]">Los</h1>
            <p>Lagos, Nigeria</p>
            <div className="flex mt-4">
              <img src={Time} className="mr-3" alt="" />
              <p className="font-bold">Sat, 12 Mar</p>
            </div>
          </div>
          <div>
            <h1 className="font-bold text-[20px]">Los</h1>
            <p>Lagos, Nigeria</p>
            <div className="flex mt-4">
              <img src={Time} className="mr-3" alt="" />
              <p className="font-bold">Sat, 12 Mar</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightListings;
