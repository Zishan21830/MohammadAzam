import React from "react";
import '../utility.css'
const Headline = ({ heading }) => {
  return (
    <div className="min-h-fit flex justify-center mb-10">
      <div className="relative flex justify-center items-center">
        <div className="absolute">
          <p className="text-4xl font-semibold text-orange-500">{heading}</p>
        </div>
        <div>
          <p className="font-mono text-6xl font-bold text-[#3e3e3e]">{heading}</p>
        </div>
      </div>
    </div>
  );
};

export default Headline;
