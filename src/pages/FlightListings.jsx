import React, { useState, useEffect } from "react";
import ArrowBack from "../assets/icons/arrow-back.png";
import Flightline from "../assets/icons/flightline.svg";
import Time from "../assets/icons/date.svg";
import Flightseat from "../assets/icons/flightseat.svg";

import { Link, useNavigate } from "react-router-dom";
import { useStateValue } from "../context/StateProvider";
import Listings from "../components/Listings";

const FlightListings = () => {
  const [{ basket }, dispatch] = useStateValue();
  const [flightlisting, setFlightlisting] = useState([]);



  async function fetchData() {
    const data = await import("../api/flight-listing.json");
    setFlightlisting(data.default);

    // console.log("airport", data.default);
  }

  useEffect(() => {
    fetchData();
  }, []);

  const navigate = useNavigate();

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

        {flightlisting.map((flight, index) => {
          return (
            <Listings flight={flight} index={index} />
          );
        })}
      </div>
    </div>
  );
};

export default FlightListings;
