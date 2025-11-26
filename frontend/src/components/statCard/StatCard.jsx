import React from "react";
import AnimatedNumber from "../animatedNumber/AnimatedNumber";

const StatCard = ({ data, label }) => {
  return (
    <div
      className="w-full md:w-[33%] text-white rounded flex flex-col gap-6 p-3"
      style={{ backgroundImage: "linear-gradient(135deg, #23262f, #353842)" }}
    >
      <p id="card-title" className="text-md">
        {label}
      </p>
      <p id="card-data" className="text-3xl font-bold text-center pb-4">
        <AnimatedNumber target={data} />
      </p>
    </div>
  );
};

export default StatCard;
