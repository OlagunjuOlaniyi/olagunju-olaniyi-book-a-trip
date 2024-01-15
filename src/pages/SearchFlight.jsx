import React from "react";
import PlaneUp from "../assets/icons/plane.svg";
import Passenger from "../assets/icons/airline-seat.png";
import { Link } from "react-router-dom";

const SearchFlight = () => {
  return (
    <div>
      <h1 className="text-[22px] font-bold text-center">Search Flight</h1>
      {/* search form */}
      <div className="mt-6">
        <form>
          <div className="mt-3 relative">
            <select className="w-[100%] py-3 px-8 rounded-sm" placeholder="To">
              <option value="Ford">Ford</option>
              <option value="Volvo">Volvo</option>
              <option value="Fiat">Fiat</option>
            </select>
            <span className="absolute left-[12px] top-[20px]">
              <img src={PlaneUp} className="text-[50px] z-10" alt="" />
            </span>
          </div>
          <div className="mt-3 relative">
            <select className="w-[100%] py-3 px-8 rounded-sm" placeholder="To">
              <option value="Ford">Ford</option>
              <option value="Volvo">Volvo</option>
              <option value="Fiat">Fiat</option>
            </select>
            <span className="absolute left-[12px] top-[20px]">
              <img src={PlaneUp} className="text-[50px] z-10" alt="" />
            </span>
          </div>
          <div className="mt-3 relative">
            <select className="w-[100%] py-3 px-8 rounded-sm" placeholder="To">
              <option value="Ford">Ford</option>
              <option value="Volvo">Volvo</option>
              <option value="Fiat">Fiat</option>
            </select>
            <span className="absolute left-[12px] top-[20px]">
              <img src={PlaneUp} className="text-[50px] z-10" alt="" />
            </span>
          </div>

          <div className="flex gap-3 mt-5 items-center">
            <img src={Passenger} className="h-full" alt="" />
            <h2 className="font-bold">Passengers</h2>
          </div>
          <div className="flex justify-between px-3 py-3 mt-3 bg-white rounded-sm">
            <p className="text-[#d3d3d3]">Adults</p>
            <div className="flex w-[30%] justify-between">
              <button className="font-bold">-</button>
              <input
                className="w-[20px] bg-transparent pl-2"
                type="text"
                name=""
                id=""
                disabled
                value={0}
              />
              <button className="font-bold">+</button>
            </div>
          </div>
          <div className="flex justify-between px-3 py-3 mt-3 bg-white rounded-sm">
            <p className="text-[#d3d3d3]">Children</p>
            <div className="flex w-[30%] justify-between">
              <button className="font-bold">-</button>
              <input
                className="w-[20px] bg-transparent pl-2"
                type="text"
                name=""
                id=""
                disabled
                value={0}
              />
              <button className="font-bold">+</button>
            </div>
          </div>
          <div className="flex justify-between px-3 py-3 mt-3 bg-white rounded-sm">
            <p className="text-[#d3d3d3]">Infants</p>
            <div className="flex w-[30%] justify-between">
              <button className="font-bold">-</button>
              <input
                className="w-[20px] bg-transparent pl-2"
                type="text"
                name=""
                id=""
                disabled
                value={0}
              />
              <button className="font-bold">+</button>
            </div>
          </div>
          {/* submit */}
          <div className="mt-8 flex">
            <Link
              to="/flightlistings"
              className="bg-[#223e7c] py-3 px-3 text-center text-[#fff] rounded-md w-[100%]"
            >
              Search Flight
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchFlight;
