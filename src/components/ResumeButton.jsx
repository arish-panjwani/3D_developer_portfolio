/** @format */

import React from "react";

const ResumeButton = () => {
  return (
    <a
      href="https://drive.usercontent.google.com/u/0/uc?id=1rpBwyY7FfuZJaonrO0inhhnnE-p5vib2&export=download"
      download>
      <button
        type="button"
        className=" font-medium px-3 py-3 flex gap-1 rounded-md transition ease-in-out delay-150 bg-[#915EFF] hover:-translate-y-1 hover:scale-110 hover:bg-purple-600 duration-300">
        <span className="lg:block hidden text-white">Resume ⬇</span>
      </button>
    </a>
  );
};

export default ResumeButton;
