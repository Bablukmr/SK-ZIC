// import React from 'react'

import { useSelector } from "react-redux";

export default function WebFooter() {
  const darkMode = useSelector((state) => state.AuthReducer.darkMode);
  return (
   
   <div className={`${
    darkMode ? "bg-slate-700 text-white" : " bg-slate-100"
  }`}>
    <div
      className={`w-[90%] ml-[5%]   flex flex-col md:flex-row justify-around items-center`}
    >

    <div className="flex items-center justify-around p-3 md:w-[50%]">
  <ul className="list-none w-50% flex flex-col gap-2">
    <li className="text-base font-medium"><a className={`${darkMode ? "text-white":"text-black"} no-underline hover:underline`} href="/">Can we help?</a></li>
    <li className="mt-4 text-sm font-normal"><a className={`${darkMode ? "text-white":"text-black"} no-underline hover:underline`} href="/">Help & support</a></li>
    <li className="text-sm font-normal"><a className={`${darkMode ? "text-white":"text-black"} no-underline hover:underline`} href="/">Contact Us</a></li>
    <li className="text-sm font-normal"><a className={`${darkMode ? "text-white":"text-black"} no-underline hover:underline`} href="/">About SK ZIC</a></li>
  </ul>

  <ul className="list-none w-50% flex flex-col gap-2">
    <li className="text-base font-medium"><a className={`${darkMode ? "text-white":"text-black"} no-underline hover:underline`} href="/">Site info</a></li>
    <li className="mt-4 text-sm font-normal"><a className={`${darkMode ? "text-white":"text-black"} no-underline hover:underline`} href="/">Privacy policy</a></li>
    <li className="text-sm font-normal"><a className={`${darkMode ? "text-white":"text-black"} no-underline hover:underline`} href="/">Cookie policy</a></li>
    <li className="text-sm font-normal"><a className={`${darkMode ? "text-white":"text-black"} no-underline hover:underline`} href="/">Terms & conditions</a></li>
  </ul>
</div>
  
    <div className="flex items-center justify-around p-3  md:w-[50%]">
  <ul className="list-none w-50% flex flex-col gap-2 mt-[-12px]">
    <li className="text-base font-medium "><a className={`${darkMode ? "text-white":"text-black"} no-underline hover:underline`} href="/">More from SK ZIC</a></li>
    <li className="mt-4 text-sm font-normal"><a className={`${darkMode ? "text-white":"text-black"} no-underline hover:underline`} href="/">Reward</a></li>
    <li className="text-sm font-normal"><a className={`${darkMode ? "text-white":"text-black"} no-underline hover:underline`} href="/">Promotion</a></li>
    {/* <li className="text-sm font-normal"><a className={`${darkMode ? "text-white":"text-black"} no-underline hover:underline`} href="/"> d</a></li> */}
  </ul>

  <ul className="list-none w-50% flex flex-col gap-2">
    <li className="text-base font-medium"><a className={`${darkMode ? "text-white":"text-black"} no-underline hover:underline`} href="/">Contact with Us</a></li>
    <li className="mt-4 text-sm font-normal"><a className={`${darkMode ? "text-white":"text-black"} no-underline hover:underline`} href="/">Facebook</a></li>
    <li className="text-sm font-normal"><a className={`${darkMode ? "text-white":"text-black"} no-underline hover:underline`} href="/">Instagram</a></li>
    <li className="text-sm font-normal"><a className={`${darkMode ? "text-white":"text-black"} no-underline hover:underline`} href="/">Twitter</a></li>
  </ul>
</div>


    </div>
    </div>
  );
}
