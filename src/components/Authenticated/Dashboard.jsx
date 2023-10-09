import React, { useContext, useEffect, useState } from "react";
import ThemeContext from "../../context/ThemeContext";
import SmallCard from "./SmallCard";
import PageContext from "../../context/LocationContext";

const Dashboard = () => {
  const { darkMode } = useContext(ThemeContext);
  const { page, setPage } = useContext(PageContext);
  const [strategies, setStrategies] = useState([]);

  useEffect(() => {
    setPage('dashboard');

    setStrategies([
      {name:"My Strategy #1", asset:"AAPL", pnl:573.24, winRate:0.7654, id:1},
      {name:"My Strategy #4", asset:"GOOG", pnl:972.14, winRate:0.8679, id:2},
      {name:"My Strategy #8", asset:"AMD", pnl:-145.21, winRate:0.3054, id:3}
    ])
  }, []);

  return(
    <>
        <div className={`
            grid gap-4 px-10 py-10 md:pt-20 h-min
            bg-gradient-to-br from-[#8BA5FF] to-[#3D4B79]
            grid-cols-1 grid-rows-3
            lg:grid-cols-2 lg:grid-rows-3
            xl:grid-cols-6 xl:grid-rows-3
          `}
        >
          
          <div className="p-4 justify-start items-center 
            bg-white border-2 border-accent rounded-md drop-shadow-md
            col-span-1 row-span-1 xl:col-span-2 lg:row-span-2 xl:row-span-2
          ">
            <div className="grid gap-2
              sm:grid-cols-1 sm:grid-rows-2
              md:grid-cols-2 md:grid-rows-1
              lg:grid-cols-1 lg:grid-rows-2
              xl:grid-cols-1 xl:grid-rows-2
            ">
              {/* Total portfolio */}
              <div className="border-dashed border-2 my-2 w-full">
                <h1 className="text-lg font-bold text-primary">Portfolio Value</h1>
                <div className="px-2">
                  <p className="">
                    <span className="text-gray-800">$</span>
                    <span className="ml-1 text-[28px] font-bold text-gray-800">1,000,000.00</span>
                  </p>
                </div>
              </div>

              {/* Profit & loss */}
              <div className="border-dashed border-2 my-2 w-full">
                <h3 className="text-lg font-bold text-primary">Profit & Loss</h3>
                <div className="flex px-2 my-2">
                  <div className="">
                    <h3 className="text-gray-500 text-xs font-medium">Unrealized P/L</h3>
                    <p className="">
                      <span className="text-gray-800">$</span>
                      <span className="ml-1 text-[28px] font-bold text-gray-800">12.50K</span>
                    </p>
                  </div>
                  <div className="ml-2">
                    <h3 className="text-gray-500 text-xs font-medium">Last 7 Days</h3>
                    <p className="">
                      <span className="text-gray-800">$</span>
                      <span className="ml-1 text-[28px] font-bold text-gray-800">2.32K</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 border-dashed border-2 lg:row-span-2 xl:col-span-3">
            chart
          </div>

          <div className="p-4 border-dashed border-2 lg:col-span-2 xl:col-span-5">
            <h3 className="font-bold text-white">Top Performing Strategies</h3>
            <div className="flex">
              {strategies.map(strategy => {
                return(
                  <SmallCard key={strategy.id} strategy={strategy} />
                );
              })}
            </div>
          </div>

        </div>

        <div className={`${ darkMode ? "text-gray-300" : "text-gray-800" }`}></div>
        
    </>
  );
};

export default Dashboard;