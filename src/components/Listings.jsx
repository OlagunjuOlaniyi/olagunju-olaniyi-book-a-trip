import React from "react";
import Flightline2 from "../assets/icons/flightline2.svg";
import { useStateValue } from "../context/StateProvider";
import { Link } from "react-router-dom";

const Listings = ({ flight, index }) => {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    // dispatch some item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: 1,
        title: "kenya airways",
        price: flight.TicketFare,
        charges: flight.ServiceCharge,
        total: flight.TicketFare + flight.ServiceCharge,
      },
    });
  };
  return (
    <div
      className="mt-4 py-3 px-3 flex flex-col bg-white rounded-md border"
      key={index}
    >
      <div className="flex justify-between items-end">
        <div className="flex-none">
          <h2 className="text-[16px] font-bold">
            {flight.DepartureDate.slice(11, 16)}
          </h2>
          <p className="text-[#434455]">{flight.DepartureAirportCode}</p>
        </div>
        <div className="flex grow w-90 text-[#72737f] text-[13px] flex-col items-center">
          <p>{flight.StopOverDuration}</p>
          <img className="w-[80%]" src={Flightline2} alt="" />
          <p>{flight.HasStopOver ? "Stopover Duration" : "Non-stop"}</p>
        </div>
        <div className="text-right flex-none">
          <h2 className="text-[16px] font-bold">
            {flight.ArrivalDate.slice(11, 16)}
          </h2>
          <p className="text-[#434455]">{flight.ArrivalAirportCode}</p>
        </div>
      </div>
      {/*  */}
      <div className="flex justify-between mt-6">
        <ul className="list-disc list-inside flex gap-2 text-[#72737f] text-[14px]">
          <li className="list-none">{flight.MarketingAirlineName}</li>
          <li>{flight.FlightClass}</li>
        </ul>
        <p className="text-[#15162b] font-semibold">N {flight.TicketFare}</p>
      </div>
      {/*  */}

      <div className="mt-8 flex">
        <Link
          onClick={addToBasket}
          to="/payment"
          className="bg-[#223e7c] py-3 px-3 text-center text-[#fff] rounded-md w-[100%]"
        >
          Make Payment
        </Link>
      </div>
    </div>
  );
};

export default Listings;
