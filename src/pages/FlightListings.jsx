import React from "react";
import ArrowBack from "../assets/icons/arrow-back.png";
import Line from "../assets/icons/line.png";
import Time from "../assets/icons/date.svg";
import { Link } from "react-router-dom";

const FlightListings = () => {
  return (
    <div>
      <div className="flex items-center justify-between mb-3 w-full">
        <Link to="/" className="w-10">
          <img className="h-full" src={ArrowBack} alt="" />
        </Link>
        <h1 className="text-[22px] font-bold w-90">Flight Listings</h1>
      </div>
      {/* info */}
      <div className="bg-[#fff] p-3 mt-3">
        <div className="mb-4">
          <img src={Line} alt="" />
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
