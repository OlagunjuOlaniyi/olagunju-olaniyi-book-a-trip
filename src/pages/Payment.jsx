import React from "react";
import ArrowBack from "../assets/icons/arrow-back.png";
import Flightline from "../assets/icons/flightline.svg";
import Time from "../assets/icons/date.svg";
import Flightseat from "../assets/icons/flightseat.svg";
import Flight from "../assets/icons/flight.png";
import { Link } from "react-router-dom";

const Payment = () => {
  return (
    <div>
      <div className="flex items-center mb-3 ">
        <Link
          to="/flightlistings"
          className="flex-none text-center p-2 rounded-sm bg-white"
        >
          <img className="h-full" src={ArrowBack} alt="" />
        </Link>
        <h1 className="text-[18px] grow text-center font-bold w-90">
          Make Payment
        </h1>
      </div>
      {/* info */}
      <div className="bg-[#fff] py-3 px-4 mt-6 rounded-md">
        <div className="p-4">
          <img className="mx-auto" src={Flightline} alt="" />
        </div>
        <div className="flex justify-between">
          <div>
            <h1 className="font-bold text-[20px]">Los</h1>
            <p className="text-[10px]">Lagos, Nigeria</p>
            <div className="flex mt-4">
              <img src={Time} className="mr-2" alt="" />
              <p className="font-bold text-[13px]">Sat, 12 Mar</p>
            </div>
          </div>
          <div className="text-right">
            <h1 className="font-bold text-[20px]">Abj</h1>
            <p className="text-[10px]">Abidjan, Cote d’ivore</p>
            <div className="flex mt-4 items-center">
              <img src={Flightseat} className="mr-2" alt="" />
              <div className="flex">
                <ul className="text-[9px] font-bold flex gap-1 list-disc list-inside">
                  <li className="list-none">3 Adults</li>
                  <li>2 Children</li>
                  <li>1 Infant</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Summary */}
      <div className="mt-5">
        <h2 className="text-[#565656] font-bold text-[14px]">Summary</h2>

        <div className="rounded-md bg-white py-3 px-4 mt-2">
          <div className="flex justify-between mb-2">
            <p className="text-[#bababa] font-semibold text-[14px]">
              Ticket fare
            </p>
            <p className="font-bold text-[16px]">N 350,000.00</p>
          </div>
          <div className="flex justify-between">
            <p className="text-[#bababa] font-semibold  text-[14px]">
              Service Charges
            </p>
            <p className="font-bold text-[16px]">N 1,000.00</p>
          </div>
        </div>

        {/* total */}
        <div className="rounded-md bg-white py-3 px-4 mt-3">
          <div className="flex justify-between mb-2">
            <p className="text-[#223e7c] font-semibold text-[14px]">
              Total Amount
            </p>
            <p className="font-bold text-[16px]">N 351,000.00</p>
          </div>
        </div>

        {/* button */}
        <div className="mt-8 flex justify-center">
          <Link
            to="/"
            className="bg-[#223e7c] fixed bottom-2 py-3 px-3 text-center text-[#fff] rounded-md w-[318px]"
          >
            Pay N 351,000.00
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Payment;