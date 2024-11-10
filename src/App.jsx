import "./App.css";
import Preloader from "./Components/Preloader/Preloader";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Details from "./Pages/Detailspage";
import Planetdetailspage from "./Pages/Planetdetailspage";
import Starshipdetailspage from "./Pages/Starshipdetailspage";
import { AnimatePresence } from "framer-motion";
import Aboutpage from "./Pages/Aboutpage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Preloader />
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/details/:name" element={<Details />} />
            <Route
              path="/planet-details/:name"
              element={<Planetdetailspage />}
            />
            <Route
              path="/starship-details/:name"
              element={<Starshipdetailspage />}
            />
            <Route path="/about" element={<Aboutpage />} />
          </Routes>
        </AnimatePresence>
      </BrowserRouter>
    </>
  );
}

export default App;
