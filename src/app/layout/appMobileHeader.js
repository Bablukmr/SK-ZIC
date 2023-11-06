import React, { useState } from "react";
import AppSideMenu from "./appSideMenu";
import { Link } from "react-router-dom";
import { Dropdown, Badge } from "antd";
import { useNavigate } from "react-router-dom";

export default function MobileHeader(props) {
  const { count } = props;
  const [navbarOpen, setNavbarOpen] = useState(false);

  const navigate = useNavigate();

  const toggelNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };

  const dropdownItems = [
    {
      label: `${count ? count : "No"} new messages from Admin`,
      key: "0",
      onClick: () => {
        navigate("/app/chat");
      },
    },
  ];

  return (
    <>
      <div className="bg-white h-[60px] flex justify-between shadow-[0px_1px_10px_0px_#f0f0f0]">
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
          <Link to="/app">
            <img src="/logo.png" className="w-[80px] h-[20px]" />
          </Link>
        </div>

        <div className="flex justify-center items-center w-1/5 bg-[ccyan]">
          <Dropdown
            trigger={["click"]}
            menu={{
              items: dropdownItems,
            }}
            className="cursor-pointer mr-6 z-20"
          >
            <Badge count={count ? count : ""}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5"
                />
              </svg>
            </Badge>
          </Dropdown>
        </div>

        <div
          className={`${
            !navbarOpen
              ? "-translate-x-full"
              : "translate-x-0 shadow-[20px_0px_100px_0px_rgba(191,191,191,.7)]"
          } 
                        left-0 w-[280px]  min-h-screen top-0 fixed transition duration-300 `}
        >
          {/* <Suspense fallback={`Loading...`}> */}
          <AppSideMenu
            // theme={theme}
            toggelNavbar={toggelNavbar}
            // setTheme={setTheme}
          />
          {/* </Suspense> */}
        </div>
      </div>
    </>
  );
}
