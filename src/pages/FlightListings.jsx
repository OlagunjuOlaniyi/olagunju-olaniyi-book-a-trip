import React, { useState, useEffect } from "react";
import ArrowBack from "../assets/icons/arrow-back.png";
import Flightline from "../assets/icons/flightline.svg";
import Time from "../assets/icons/date.svg";
import Flightseat from "../assets/icons/flightseat.svg";
import { Link } from "react-router-dom";
import { useStateValue } from "../context/StateProvider";
import Listings from "../components/Listings";

const FlightListings = () => {
  const [{ search }, dispatch] = useStateValue();
  const [flightlisting, setFlightlisting] = useState([]);

  async function fetchData() {
    const data = await import("../api/flight-listing.json");
    setFlightlisting(data.default);

    // console.log("airport", data.default);
  }

  const emptySearch = () => {
    // dispatch some item into the data layer
    dispatch({
      type: "EMPTY_SEARCH",
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    document.title = "Avitech - Flight Listings";
  }, []);

  // const navigate = useNavigate();

  return (
    <div className="lg:px-5">
      <div className="flex items-center mb-3 ">
        <Link
          onClick={emptySearch}
          to="/"
          className="flex-none text-center p-2 rounded-sm bg-white"
        >
          <img className="h-full" src={ArrowBack} alt="" />
        </Link>
        <h1 className="text-[18px] grow text-center font-bold w-90">
          Flight Listings
        </h1>
      </div>
      {/* info */}

      {search.map(
        ({ from, to, codeFrom, codeTo, adult, children, infant, date }) => {
          return (
            <div className="bg-[#fff] py-3 px-4 mt-6 rounded-md">
              <div className="p-4">
                <img className="mx-auto" src={Flightline} alt="" />
              </div>
              <div className="flex justify-between">
                <div>
                  <h1 className="font-bold text-[20px]">{codeFrom}</h1>
                  <p className="text-[10px]">{from}</p>
                  <div className="flex mt-4">
                    <img src={Time} className="mr-2" alt="" />
                    <p className="font-bold text-[13px]">
                      {date.substring(0, 10)}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <h1 className="font-bold text-[20px]">{codeTo}</h1>
                  <p className="text-[10px]">{to}</p>
                  <div className="flex mt-4 items-center">
                    <img src={Flightseat} className="mr-2" alt="" />
                    <div className="flex">
                      <ul className="text-[9px] font-bold flex gap-1 list-disc list-inside">
                        <li className="list-none">{adult} Adults</li>
                        <li>{children} Children</li>
                        <li>{infant} Infant</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        }
      )}

      {/* Available flight */}
      {search.map((sea) => {
        return <span>{sea.name}</span>;
      })}
      <div className="mt-6">
        <div className="flex items-end gap-2">
          <h1 className="text-[20px] font-bold">Available Flights</h1>
          <p className="text-[#223e7c] font-bold">
            {flightlisting.length} Flights
          </p>
        </div>

        {flightlisting.map((flight, index) => {
          return <Listings flight={flight} index={index} />;
        })}
      </div>
    </div>
  );
};

export default FlightListings;
