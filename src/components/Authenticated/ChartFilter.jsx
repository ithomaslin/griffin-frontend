import React from "react";

const ChartFilter = ({ text, active, onClick }) => {
  return (
    <>
      <button onClick={onClick} className={`w-10 h-6 m-2 text-xs border-1 rounded-md flex items-center justify-center ${
        active 
        ? "bg-indigo-600 border-indigo-700 text-gray-100 cursor-default" 
        : "cursor-pointer border-indigo-300 text-indigo-300 hover:bg-indigo-400 hover:text-indigo-600" 
      }`}
    >
      {text}
    </button>
    </>
  );
};

export default ChartFilter;