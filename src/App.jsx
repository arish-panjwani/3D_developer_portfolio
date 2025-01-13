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
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        {/* <Feedbacks /> */}
        <div className="relative z-0">
          <div
            style={{
              opacity: 0.8,
              backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0) 80%, rgba(6,8,22, 1)), url('/src/assets/herobg.png')`,
            }}
            className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero />
          </div>
          <About />
          <Experience />
          <Education />
          <Tech />
          <Works />
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
