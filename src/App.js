import Nav from "./components/Nav";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer";
import AboutPage from "./components/AboutPage";
import MenuPage from "./components/MenuPage";
import ReservationPage from "./components/ReservationPage";
import TemplatePage from "./components/TemplatePage";

import "./App.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Nav />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/menu' element={<MenuPage />} />
        <Route path='/reservation' element={<ReservationPage />} />
        <Route
          path='/order-online'
          element={<TemplatePage header={"Order Online"} />}
        />

        <Route path='/login' element={<TemplatePage header={"Login"} />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
