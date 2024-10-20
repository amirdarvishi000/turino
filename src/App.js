import "./css/Popup.css";
import "./styles.css";
import "./fonts/IRAN-SANS.CSS";
import "bootstrap/dist/css/bootstrap.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import InfoCard from "./Pages/InfoCard";
import Register from "./Pages/Register";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Favorit from "./Pages/Favorit";
import Search from "./Pages/Search";
import MyProgram from "./Pages/my-program";
import ProgramOffer from "./Pages/program-offer";
import About from "./Pages/about";
import "./css/Card-image.css";

export default function App() {
  const location = useLocation();
  function titlePage(loc) {
    if (loc === "/") {
      return "تورینو";
    } else if (loc === "/favorit") {
      return "علاقه مندی ها";
    } else if (loc === "/search") {
      return "جست و جو";
    } else if (loc === "/my-program") {
      return "برناهه های من";
    } else if (loc === "/program-offer") {
      return "پیشنهاد برنامه";
    } else if (loc === "/info") {
      return "تورینو";
    } else if (loc === "/register") {
      return "ثبت نام";
    } else if (loc === "/about") {
      return "درباره ما";
    }
  }
  return (
    <div className="App">
      <Header title={titlePage(location.pathname)} />
      <div className="container">
        <Routes>
          <Route path="about" element={<About />} />
          <Route path="" element={<Home />} />
          <Route path="info" element={<InfoCard />} />
          <Route path="register" element={<Register />} />
          <Route path="favorit" element={<Favorit />} />
          <Route path="search" element={<Search />} />
          <Route path="my-program" element={<MyProgram />} />
          <Route path="program-offer" element={<ProgramOffer />} />
        </Routes>
      </div>
      <Footer />
      <div style={{ width: "100%", height: "120px" }}></div>
    </div>
  );
}
