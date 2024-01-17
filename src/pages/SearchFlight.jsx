import React, { useState, useEffect } from "react";
import PlaneUp from "../assets/icons/plane.svg";
import PlaneTo from "../assets/icons/PlaneTo.svg";
import Passenger from "../assets/icons/airline-seat.png";
import { Link, useNavigate } from "react-router-dom";
import Location from "../components/DepartureFrom";
import DepartureFrom from "../components/DepartureFrom";
import DepartureTo from "../components/DepartureTo";
import { useStateValue } from "../context/StateProvider";

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
  const [{ search }, dispatch] = useStateValue();
  const [searchFrom, setSearchFrom] = useState("");
  const [searchTo, setSearchTo] = useState("");
  const [codeFrom, setCodeFrom] = useState("");
  const [codeTo, setCodeTo] = useState("");
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

  const handleOptions = (e, name, operation) => {
    e.preventDefault();
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

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchFrom && searchTo) {
      dispatch({
        type: "ADD_TO_SEARCH",
        item: {
          from: searchFrom,
          to: searchTo,
          codeFrom: codeFrom,
          codeTo: codeTo,
          adult: options.adult,
          children: options.children,
          infant: options.infant,
        },
      });

      {
        search && navigate("/flightlistings");
      }
    } else {
      alert("Kindly fill in the required details");
    }
  };

  const navigate = useNavigate();

  return (
    <div>
      <h1 className="text-[18px] font-bold text-center">Search Flight</h1>

      {/* search form */}
      <form>
        <div className="mt-6">
          <div className="mt-3 relative">
            <input
              className="w-[100%] py-3 px-8 rounded-sm bg-white"
              placeholder="From"
              value={searchFrom}
              onClick={() => setOpenFrom(true)}
              required
            />

            <span className="absolute left-[12px] top-[20px]">
              <img src={PlaneUp} className="text-[50px] z-10" alt="" />
            </span>
          </div>
          {openFrom && (
            <DepartureFrom
              airports={airports}
              closeFrom={setOpenFrom}
              setCountryFrom={setAirports}
              setSearchFrom={setSearchFrom}
              setCodeFrom={setCodeFrom}
            />
          )}

          <div className="mt-3 relative">
            <input
              className="w-[100%] py-3 px-8 rounded-sm bg-white"
              placeholder="To"
              value={searchTo}
              onClick={(e) => setOpenTo(true)}
              required
            />

            <span className="absolute left-[12px] top-[20px]">
              <img src={PlaneUp} className="text-[50px] z-10" alt="" />
            </span>
          </div>
          {openTo && (
            <DepartureTo
              airports={airports}
              closeTo={setOpenTo}
              setCountryFrom={setAirports}
              setSearchTo={setSearchTo}
              setCodeTo={setCodeTo}
            />
          )}

          <div className="mt-3 relative">
            <input
              className="w-[100%] py-3 px-8 rounded-sm"
              placeholder="To"
              type="date"
              required
            />
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
                onClick={(e) => handleOptions(e, "adult", "d")}
                disabled={options.adult <= 1}
              >
                -
              </button>
              <input
                className="w-[20px] bg-transparent pl-2"
                type="text"
                name=""
                onChange={(e) => setCount(e.target.value)}
                disabled
                value={options.adult}
                required
              />
              {/* <p>{options.adult}</p> */}
              <button
                className="font-bold"
                onClick={(e) => handleOptions(e, "adult", "i")}
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
                onClick={(e) => handleOptions(e, "children", "d")}
                disabled={options.children <= 0}
              >
                -
              </button>
              <input
                className="w-[20px] bg-transparent pl-2"
                type="text"
                name=""
                onChange={(e) => setCount(e.target.value)}
                disabled
                value={options.children}
                required
              />
              {/* <p>{options.children}</p> */}
              <button
                className="font-bold"
                onClick={(e) => handleOptions(e, "children", "i")}
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
                onClick={(e) => handleOptions(e, "infant", "d")}
                disabled={options.infant <= 0}
              >
                -
              </button>
              <input
                className="w-[20px] bg-transparent pl-2"
                type="text"
                name=""
                onChange={(e) => setCount(e.target.value)}
                disabled
                value={options.infant}
                required
              />
              {/* <p>{options.infant}</p> */}
              <button
                className="font-bold"
                onClick={(e) => handleOptions(e, "infant", "i")}
              >
                +
              </button>
            </div>
          </div>
          {/* submit */}
          <div className="mt-8 flex justify-center">
            <button
              type="submit"
              onClick={handleSubmit}
              // onClick={() => navigate("/flightlistings")}
              className="bg-[#223e7c] py-3 px-3 text-center text-[#fff] rounded-md fixed bottom-2 w-[318px]"
            >
              Search Flight
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchFlight;
