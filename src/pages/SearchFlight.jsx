import React, { useState, useEffect } from "react";
import PlaneUp from "../assets/icons/plane.svg";
import PlaneTo from "../assets/icons/PlaneTo.svg";
import Passenger from "../assets/icons/airline-seat.png";
import { Link, useNavigate } from "react-router-dom";
import Location from "../components/Location";

// const AutoSuggest = (initialValue) => {
//   const [input, setInput] = useState('');
//   const [matchingSuggestions, setMatchingSuggestions] = useState([]);
//   const [isOpen, setIsOpen] = useState(false);

//   const AutoSuggest = (initialValue) => {
//   const [input, setInput] = useState('');
//   const [matchingSuggestions, setMatchingSuggestions] = useState([]);
//   const [isOpen, setIsOpen] = useState(false);

//   const handleInputChange = (event) => {
//     const inputValue = event.target.value.toLowerCase();
//     setInput(inputValue);

//     const filteredSuggestions = suggestions.filter((suggestion) =>
//       suggestion.toLowerCase().startsWith(inputValue)
//     );
//     setMatchingSuggestions(filteredSuggestions);
//   };

//   const handleSuggestionClick = (suggestion) => {
//     setInput(suggestion);
//     setIsOpen(false);
//   };

//   return {
//     input,
//     matchingSuggestions,
//     isOpen,
//     setInput,
//     setIsOpen,
//     handleInputChange,
//     handleSuggestionClick,
//   };
// }

const SearchFlight = () => {
  const [airports, setAirports] = useState([]);
  const [count, setCount] = useState(0);
  const [openFrom, setOpenFrom] = useState(false);
  const [openTo, setOpenTo] = useState(false);
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    infant: 0,
  });

  const handleOptions = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  // const departureSuggest = AutoSuggest("");
  // const arrivalSuggest = AutoSuggest("");

  async function fetchData() {
    const data = await import("../api/airports.json");
    setAirports(data.default);

    // console.log("airport", data.default);
  }

  useEffect(() => {
    fetchData();
  }, []);

  const navigate = useNavigate();

  const handleIncrease = (e) => {
    e.preventDefault();
    if (count >= 0) {
      setCount(count + 1);
    }
  };
  const handleDecrease = (e) => {
    e.preventDefault();
    if (count != 0) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <h1 className="text-[18px] font-bold text-center">Search Flight</h1>

      {airports.map((Country, index) => {
        const { Name, Code, CountryCode } = Country;
        console.log(Name);
        return <span></span>;
      })}
      {/* search form */}
      <div className="mt-6">
        <div className="mt-3 relative">
          <p
            className="w-[100%] py-3 px-8 rounded-sm bg-white"
            // placeholder="From"
            // value={airports.Name}
            onClick={() => setOpenFrom(true)}
          >
            {" "}
            From
          </p>

          <span className="absolute left-[12px] top-[20px]">
            <img src={PlaneUp} className="text-[50px] z-10" alt="" />
          </span>
        </div>
        {openFrom && (
          <Location
            airports={airports}
            closeFrom={setOpenFrom}
            setCountryFrom={setAirports}
          />
        )}

        <div className="mt-3 relative">
          <p
            className="w-[100%] py-3 px-8 rounded-sm bg-white"
            // placeholder="From"
            // value={airports.Name}
            onClick={() => setOpenTo(true)}
          >
            {" "}
            To
          </p>

          <span className="absolute left-[12px] top-[20px]">
            <img src={PlaneUp} className="text-[50px] z-10" alt="" />
          </span>
        </div>
        {openFrom && (
          <Location
            airports={airports}
            closeTo={setOpenTo}
            setCountryFrom={setAirports}
          />
        )}
        {/* <div className="mt-3 relative">
          <select className="w-[100%] py-3 px-8 rounded-sm" placeholder="To">
            <option value="Ford">Ford</option>
            <option value="Volvo">Volvo</option>
            <option value="Fiat">Fiat</option>
          </select>
          <span className="absolute left-[12px] top-[20px]">
            <img src={PlaneTo} className="text-[50px] z-10" alt="" />
          </span>
        </div> */}
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
            <button
              className="font-bold"
              onClick={() => handleOptions("adult", "d")}
              disabled={options.adult <= 1}
            >
              -
            </button>
            {/* <input
                className="w-[20px] bg-transparent pl-2"
                type="text"
                name=""
                onChange={(e) => setCount(e.target.value)}
                disabled
                value={count}
              /> */}
            <p>{options.adult}</p>
            <button
              className="font-bold"
              onClick={() => handleOptions("adult", "i")}
            >
              +
            </button>
          </div>
        </div>
        <div className="flex justify-between px-3 py-3 mt-3 bg-white rounded-sm">
          <p className="text-[#d3d3d3]">Children</p>
          <div className="flex w-[30%] justify-between">
            <button
              className="font-bold"
              onClick={() => handleOptions("children", "d")}
              disabled={options.children <= 0}
            >
              -
            </button>
            <p>{options.children}</p>
            <button
              className="font-bold"
              onClick={() => handleOptions("children", "i")}
            >
              +
            </button>
          </div>
        </div>
        <div className="flex justify-between px-3 py-3 mt-3 bg-white rounded-sm">
          <p className="text-[#d3d3d3]">Infants</p>
          <div className="flex w-[30%] justify-between">
            <button
              className="font-bold"
              onClick={() => handleOptions("infant", "d")}
              disabled={options.infant <= 0}
            >
              -
            </button>
            <p>{options.infant}</p>
            <button
              className="font-bold"
              onClick={() => handleOptions("infant", "i")}
            >
              +
            </button>
          </div>
        </div>
        {/* submit */}
        <div className="mt-8 flex justify-center">
          <button
            type="submit"
            onClick={() => navigate("/flightlistings")}
            className="bg-[#223e7c] py-3 px-3 text-center text-[#fff] rounded-md fixed bottom-2 w-[318px]"
          >
            Search Flight
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchFlight;
