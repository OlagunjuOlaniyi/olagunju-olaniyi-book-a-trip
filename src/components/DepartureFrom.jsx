import React from "react";
import Close from "../assets/icons/close.svg";
import popline from "../assets/icons/popline.svg";
// import { useStateValue } from "../context/StateProvider";

const DepartureFrom = ({
  airports,
  openFrom,
  closeFrom,
  setSearchFrom,
  setCodeFrom,
}) => {
  const handleClick = (Name, Code) => {
    setSearchFrom(Name);
    setCodeFrom(Code);

    closeFrom(false);
  };

  return (
    <div
      className={`bg-white  rounded-md fixed lg:w-[390px] lg:mx-auto transform right-0 bottom-0 left-0 z-10 overflow-y-auto ${
        openFrom ? "h-[90vh] py-3 px-4" : "h-[0vh]"
      } transition-all ease-in duration-500`}
    >
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
        const { Id, Name, StateName, CountryCode, Code } = Country;

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
            <p>{Code}</p>
          </div>
        );
      })}
    </div>
  );
};

export default DepartureFrom;
