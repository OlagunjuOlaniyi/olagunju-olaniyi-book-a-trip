import React from "react";
import ArrowBack from "../assets/icons/arrow-back.png";
import Flightline from "../assets/icons/flightline.svg";
import Time from "../assets/icons/date.svg";
import Flightseat from "../assets/icons/flightseat.svg";
import Flight from "../assets/icons/flight.png";
import { Link } from "react-router-dom";

const FlightListings = () => {
  return (
    <div>
      <div className="flex items-center mb-3 ">
        <Link to="/" className="flex-none text-center p-2 rounded-sm bg-white">
          <img className="h-full" src={ArrowBack} alt="" />
        </Link>
        <h1 className="text-[18px] grow text-center font-bold w-90">
          Flight Listings
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

      {/* Available flight */}

      <div className="mt-6">
        <div className="flex items-end gap-3">
          <h1 className="text-[20px] font-bold">Available Flights</h1>
          <p className="text-[#223e7c] font-bold">6 Flights</p>
        </div>

        {[1, 2, 3, 4].map((index) => {
          return (
            <div className="mt-4 py-3 px-3 flex flex-col bg-white rounded-md border">
              <div className="flex justify-between items-end">
                <div className="flex-none">
                  <h2 className="text-[16px] font-bold">06:45 am</h2>
                  <p className="text-[#434455]">NBO</p>
                </div>
                <div className="flex text-[#72737f] text-[13px] flex-col items-center">
                  <p>4h 20m</p>
                  <img src={Flight} alt="" />
                  <p>Non-stop</p>
                </div>
                <div className="text-right flex-none">
                  <h2 className="text-[16px] font-bold">10:45 am</h2>
                  <p className="text-[#434455]">MBA</p>
                </div>
              </div>
              {/*  */}
              <div className="flex justify-between mt-4">
                <ul className="list-disc list-inside flex gap-2 text-[#72737f] text-[14px]">
                  <li className="list-none">Kenya Airways</li>
                  <li>Economy</li>
                </ul>
                <p className="text-[#15162b] font-semibold">N 350,000.00</p>
              </div>
              {/*  */}

              <div className="mt-8 flex">
                <Link
                  to="/payment"
                  className="bg-[#223e7c] py-3 px-3 text-center text-[#fff] rounded-md w-[100%]"
                >
                  Make Payment
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FlightListings;
