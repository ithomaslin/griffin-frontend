import React from "react";
import { pie } from "../../assets";

const SmallCard = ({ strategy }) => {
  return(
    <>
      <div className="bg-white hover:bg-slate-100 rounded-md cursor-pointer m-2 p-2">
        <div className="flex">
          <span className="flex text-sm font-semibold text-secondary">
            <img src={pie} alt="pie-icon" className="lg:mr-2 lg:mb-2" />
            {strategy.name} - {strategy.asset}
          </span>
        </div>
        <div className="flex">
          <p className="text-xs font-semibold mx-1">P/L: 
            <span className={`ml-1 ${strategy.pnl > 0 ? "text-positive" : "text-negative"}`}>
              {strategy.pnl > 0 ? (strategy.pnl) : ("(" + Math.abs(strategy.pnl) + ")")}
            </span></p>
          <p className="text-xs font-semibold mx-1">Win rate: <span>{Math.round((strategy.winRate + Number.EPSILON) * 100)}%</span></p>
        </div>
      </div>
    </>
  );
};

export default SmallCard;