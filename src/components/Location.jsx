import React, { useState } from "react";
import Close from "../assets/icons/close.svg";
import popline from "../assets/icons/popline.svg";

const Location = ({ airports, closeFrom, closeTo, setCountryFrom }) => {
  const [countri, setCountri] = useState("");
  //   const filterItem = (Id) => {
  //     const newAirport = airports.map((count) => {
  //       console.log("getId", count.Id);
  //       const { Id } = count;
  //       return Id;
  //     });
  //     const newCountry = newAirport.filter((count) => count === Id);
  //     console.log("idnew", newCountry);
  //     setCountryFrom((airport) => {
  //       return [...airport, newCountry];
  //     });

  //     console.log("airp", newCountry);
  //   };
  const handleClick = (Name) => {
    setCountri(Name);

    console.log("country name", countri);
    closeFrom(false);
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
          onClick={() => closeFrom(false)}
          //   onClick={() => closeTo(false)}
        />
      </div>
      {airports.map((Country) => {
        const { Id, Name, StateName, CountryCode } = Country;

        return (
          <div
            className="flex justify-between items-center py-3 px-2 border-b cursor-pointer"
            key={Id}
            onClick={() => handleClick(Name)}
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
      <div className="flex justify-between items-center py-3 px-2 border-b-2">
        <div>
          <h3>Nairobi, Kenya</h3>
          <p className="text-[#434455] text-[12px]">
            Jomo Kenyatta International Airport
          </p>
        </div>
        <p>NBO</p>
      </div>
    </div>
  );
};

export default Location;
