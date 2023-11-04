// import React from 'react'

import { useSelector } from "react-redux";

export default function WebFooter() {
  const darkMode = useSelector((state) => state.AuthReducer.darkMode);
  return (
    <div
      className={`w-full  h-[700px] md:h-[400px] ${
        darkMode ? "bg-slate-700" : "bg-[#383434]"
      }   flex justify-center items-center`}
    >
      <div className="w-[80%] ml-[10%] md:ml-0 flex-col flex md:flex-row items-center justify-center ">
        <div className="w-[90%] ml-[5%] md:w-[40%] h-[300px]">
          <img
            src="/sookee-thumbs-up.png"
            alt="/"
            className="h-[80%] md:h-[85%] lg:h-[95%] w-[80%]"
          />
        </div>
        <div className="w-[90%] ml-[5%] md:w-[40%] h-[300px]">
          <img
            src="/Asset 12@2x-8.png"
            alt="/"
            className="h-[80%] md:h-[85%] lg:h-[95%] w-[80%]"
          />
        </div>
      </div>
    </div>
  );
}
