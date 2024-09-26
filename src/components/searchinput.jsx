import React from "react"
import { RiCalendar2Line } from "react-icons/ri";

export default function Searchinput() {
  return (
    <>
      <div className="flex items-center space-x-4 my-3 w-full max-w-[300px] border border-black">
        <div className="relative w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-3 top-3 h-6 w-6 cursor-pointer stroke-slate-400 peer-disabled:cursor-not-allowed"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.5"
            aria-hidden="true"
            aria-label="Search icon"
            role="graphics-symbol"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
          <input
            id="search"
            type="search"
            name="search"
            placeholder="Search"
            aria-label="Search content"
            className="peer h-12 w-full border border-slate-300 pl-12 text-slate-600 transition-all outline-none autofill:bg-white placeholder-gray-400  invalid:border-pink-500 invalid:text-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
          />
        </div>

        <div className="p-3 bg-[#efeeee] rounded-lg cursor-pointer transition-all flex justify-center" style={{marginLeft:"0"}}>
          <RiCalendar2Line className="text-slate-600 h-6 w-6" />
        </div>
      </div>

    </>
  )
}
