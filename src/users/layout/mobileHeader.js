import React, { useState } from "react";
import SideMenu from "./sideMenu";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { changeDarkMode } from "../../store/action";
import MyButton from "../../components/button";

export default function MobileHeader() {
  const darkMode = useSelector((state) => state.AuthReducer.darkMode);

  console.log(darkMode);
  const dispatch = useDispatch();
  const [navbarOpen, setNavbarOpen] = useState(false);

  const toggelNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <>
      <div
        className={`${
          darkMode ? "bg-slate-700 text-white" : "bg-white"
        } h-[60px] flex justify-between shadow-[0px_1px_10px_0px_#f0f0f0]`}
      >
        <div className="flex justify-center items-center w-1/5 bg-[ccyan]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6 font-bold"
            onClick={toggelNavbar}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>

        <div className="w-1/2 bg-[greeen] flex items-center justify-center">
          <img src="/logo1.png" alt="/logo" className="w-[90px]  h-[90px]" />
        </div>

        <div className="flex items-center justify-center">
          <div
            className={`flex  relative gap-1 p-1 rounded-full ${
              darkMode ? "border-slate-800" : "border-slate-300  "
            }  h-[20px] items-center justify-center border border-solid`}
          >
            <p
              onClick={() => dispatch(changeDarkMode(false))}
              className="cursor-pointer"
            >
              ☀️
            </p>
            <p
              onClick={() => dispatch(changeDarkMode(true))}
              className="cursor-pointer"
            >
              🌙
            </p>
            <p
              className={`absolute ${
                darkMode ? "right-1" : "left-1"
              } bg-black h-[20px] w-[20px] rounded-full cursor-pointer`}
            ></p>
          </div>
        </div>

        <div className="flex justify-center items-center w-[30%] bg-[ccyan] ">
          <Link to="/signin" className="no-underline text-black">
            {/* <button className="border-none py-2 px-4 bg-[#fff]">Log In</button> */}
            <MyButton
              text="Log In"
              // mdh="h-[30px]"
              // mdw="w-[120px]"
              // bgColor={`${darkMode ? "bg-red-500" : "bg-[#23262d]"}`}
              bgColor="bg-transparent"
              // bgColor="bg-[#23262d]"
              textColor={`${darkMode ? "text-white" : "text-black"}`}
            />
          </Link>
        </div>

        <div
          className={`${
            !navbarOpen
              ? "-translate-x-full"
              : "translate-x-0 shadow-[20px_0px_100px_0px_rgba(191,191,191,.7)]"
          } 
                        left-0 w-[280px]  min-h-screen top-0 fixed transition duration-300 `}
        >
          <SideMenu
            // theme={theme}
            toggelNavbar={toggelNavbar}
          />
          {/* </Suspense> */}
        </div>
      </div>
    </>
  );
}
