import "./App.css";
import Preloader from "./Components/Preloader/Preloader";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Details from "./Pages/Detailspage";
import Planetdetailspage from "./Pages/Planetdetailspage";
import Starshipdetailspage from "./Pages/Starshipdetailspage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Preloader />
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/details/:name" element={<Details />} />
          <Route path="/planet-details/:name" element={<Planetdetailspage />} />
          <Route
            path="/starship-details/:name"
            element={<Starshipdetailspage />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
