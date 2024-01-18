import React, { useState } from "react";
import Close from "../assets/icons/close.svg";
import popline from "../assets/icons/popline.svg";
import Calendar from "react-calendar";

const CalendarDate = ({ value, onChange, setOpenDate }) => {
  return (
    <div className="bg-white pt-3 pb-6 px-4 rounded-md mt-2 lg:relative fixed bottom-0 right-0 left-0 h-[90vh] z-10 overflow-y-auto">
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
