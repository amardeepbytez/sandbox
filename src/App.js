import React from "react";
import Topbar from "./components/Topbar";
import Swiper from "./components/Swiper";
import About from "./components/About";
import Reviews from "./components/Reviews";
import Team from "./components/Team"
import Info from "./components/Info";
import Contact from "./components/Contact";
import Join from "./components/Join";
import Footer from "./components/Footer";
import Progressbar from "./components/Progressbar";

function App() {
  return (
    <div className="content-wrapper">
      <Topbar />
      <Swiper />
      <About />
      <Reviews />
      <Team />
      <Info />
      <Contact />
      <Join />
      <Footer />
      <Progressbar />
    </div>
  );
}

export default App;
