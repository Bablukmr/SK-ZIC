// import React from 'react'

import { useSelector } from "react-redux";

export default function WebFooter() {
  const darkMode = useSelector((state) => state.AuthReducer.darkMode);
  return (
    <div
      className={`w-full py-6 h-[600px] md:h-[300px] lg:h-[330px] xl:h-[350px] ${
        darkMode ? "bg-slate-700" : "bg-[#383434]"
      } flex justify-center items-center`}
    >
      <div className="w-[80%] ml-[10%] md:ml-0  flex flex-col md:flex-row items-center justify-center ">
        <div className="w-[90%] md:w-[40%] h-[300px]  flex items-center justify-center">
          <img
            src="/sookee-thumbs-up.png"
            alt="/"
            className="h-[80%] md:h-[85%] lg:h-[95%] w-[80%]"
          />
        </div>
        <div className="w-[90%]  md:w-[40%] h-[300px] flex items-center justify-center">
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
