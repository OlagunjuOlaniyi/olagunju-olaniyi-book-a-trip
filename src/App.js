import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchFlight from "./pages/SearchFlight";
import FlightListings from "./pages/FlightListings";

function App() {
  return (
    <div className="App mobile__layout min-h-[100vh]">
      <Router>
        <Routes>
          <Route path="/" element={<SearchFlight />} />
          <Route path="/flightlistings" element={<FlightListings />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
