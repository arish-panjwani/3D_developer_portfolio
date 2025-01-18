/** @format */

import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Education,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  AllRightsReserved,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        {/* <Feedbacks /> */}
        <Navbar />
        <div className="relative z-0">
          <div
            style={{
              opacity: 0.8,
              backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0) 80%, rgba(6,8,22, 1)), url('https://i.postimg.cc/k4pgzs6F/herobg.jpg')`,
            }}
            className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Hero />
          </div>
          <About />
          <Experience />
          <Education />
          <Tech />
          <Works />
          <Contact />
          <StarsCanvas />
          <AllRightsReserved />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
