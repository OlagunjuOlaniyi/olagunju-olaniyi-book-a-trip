import React, { useState } from "react";
import Close from "../assets/icons/close.svg";
import popline from "../assets/icons/popline.svg";
import { useStateValue } from "../context/StateProvider";

const DepartureFrom = ({
  airports,
  closeTo,
  setSearchTo,
  setCodeTo,
  setCountryFrom,
}) => {
  const [{ search }, dispatch] = useStateValue();

  const handleClick = (Name, Code) => {
    setSearchTo(Name);
    setCodeTo(Code);

    closeTo(false);
  };

  //   const departure = AutoSuggest("");
  //   const arrival = AutoSuggest("");

  return (
    <div className="bg-white py-3 px-4 rounded-md">
      <div className="flex justify-center">
        <img src={popline} alt="" />
      </div>
      <div className="flex justify-end mt-2 mb-5">
        <img
          className="cursor-pointer"
          src={Close}
          alt=""
          onClick={() => closeTo(false)}
          //   onClick={() => closeTo(false)}
        />
      </div>
      {airports.map((Country) => {
        const { Id, Name, StateName, Code, CountryCode } = Country;

        return (
          <div
            className="flex justify-between items-center py-3 px-2 border-b cursor-pointer"
            key={Id}
            onClick={() => handleClick(Name, Code)}
          >
            <div>
              <h3>
                {StateName}, {CountryCode}
              </h3>
              <p className="text-[#434455] text-[12px]">{Name}</p>
            </div>
            <p>NBO</p>
          </div>
        );
      })}
    </div>
  );
};

export default DepartureFrom;