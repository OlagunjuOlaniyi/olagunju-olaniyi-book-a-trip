import React from "react";
import Close from "../assets/icons/close.svg";
import popline from "../assets/icons/popline.svg";
import Calendar from "react-calendar";

const CalendarDate = ({ value, openDate, onChange, setOpenDate }) => {
  return (
    <div
      className={`bg-white  rounded-md fixed lg:w-[390px] lg:mx-auto transform right-0 bottom-0 left-0 z-10 overflow-y-auto ${
        openDate ? "h-[90vh] py-3 px-4" : "h-[0vh]"
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
          onClick={() => setOpenDate(false)}
        />
      </div>
      <h1 className="text-center font-bold">Travel dates</h1>

      <p className="my-3">Select your travel date</p>
      <Calendar onChange={onChange} value={value} />
    </div>
  );
};

export default CalendarDate;
