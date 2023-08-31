import React from "react";
import Topbar from "./components/Topbar";
import Swipe from "./components/Swipe";
import About from "./components/About";
import Reviews from "./components/Reviews";
import Team from "./components/Team"
import Info from "./components/Info";
import Contact from "./components/Contact";
import Join from "./components/Join";
import Footer from "./components/Footer";
import PageProgress from "./components/PageProgress"

function App() {
  return (
    <div className="content-wrapper">
      <Topbar />
      <Swipe />
      <About />
      <Reviews />
      <Team />
      <Info />
      <Contact />
      <Join />
      <Footer />
      <PageProgress />
    </div>
  );
}

export default App;
