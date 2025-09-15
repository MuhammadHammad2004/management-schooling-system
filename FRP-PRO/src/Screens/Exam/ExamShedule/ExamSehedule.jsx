import React from "react";
import { Navbar } from "../../../Components/Navbar/Navbar";
import Cards from "../../../Components/SheduleCrard/Cards";

export const ExamSehedule = () => {
  return (
    <div>
      <Navbar />
      <div className="absolute top-30 px-95">
        <div className="max-w-full px-7 py-4  bg-transparent">
          <Cards />
        </div>
      </div>
    </div>
  );
};
