import React, { useState, useContext } from "react";
import SearchResults from "./SearchResults";
import ThemeContext from "../../context/ThemeContext";
import { searchSymbols } from "../../api/stock-api";

const Search = () => {
  const { darkMode } = useContext(ThemeContext);
  const [input, setInput] = useState("");
  const [bestMatches, setBestMatches] = useState([]);

  const clear = () => {
    setInput("");
    setBestMatches([]);
  }

  const updateBestMatches = async () => {
    try {
      if (input) {
        const searchResults = await searchSymbols(input);
        const result = searchResults.result;
        setBestMatches(result);
      }
    } catch(error) {
      setBestMatches([]);
      console.log(error);
    }
  }
  
  return (
    <>
      <div 
        className={`flex items-center my-6 border-2 rounded-md relative z-50 w-96 ${
          darkMode ? "bg-gray-900 border-gray-800" : "bg-white border-neutral-200"
        }`}
      >
        <input 
          type="text" 
          value={input} 
          placeholder="Search stock..."
          className={`w-full px-4 py-2 border-none focus:outline-0 focus:ring-0 rounded-md ${
            darkMode ? "bg-gray-900" : null
          }`}
          onChange={(event) => {
            setInput(event.target.value);
          }}
          onKeyDown={(event) => {
            if (event.key === "enter") {
              updateBestMatches();
            }
          }}
        />

        {input && (
        <button onClick={clear} className="m-1">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 fill-gray-500">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>)}

        <button onClick={updateBestMatches} className="h-8 w-8 bg-indigo-600 rounded-md flex justify-center items-center m-1 p-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-gray-100">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
        </button>

        {input && bestMatches.length > 0 ? <SearchResults results={bestMatches} /> : null}

      </div>
    </>
  );
};

export default Search;