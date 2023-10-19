import React from "react";
import { Link } from "react-router-dom";
// import Button from "./button.js";
// import Buttonn from "./buttonn.js";

function SideMenu(props) {
    const { toggelNavbar } = props;
    return (
        <div
            className="bg-[#f5f5f5]"
        >
            <section
                className="h-[60px]  w-full flex justify-between  text-black 
                items-center bg-[redd]"
            >

                <p className="bold text-2xl pl-4 ">Menu</p>

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 pr-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    onClick={toggelNavbar}

                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                    />
                </svg>

            </section>
            <section className="h-[calc(100vh-60px)] w-full">

                <ul
                    className="m-0 p-0 list-none space-y-4 py-10 w-full bg-[redd]"
                >
                    <li onClick={toggelNavbar} className="w-[90%] ml-[5%]">
                        <Link to="/" className="no-underlin">
                            <button className="w-full border-none text-left pl-4 bg-[#fff] py-4 rounded-md">
                                Home
                            </button>
                        </Link>
                    </li>

                    <li onClick={toggelNavbar} className="w-[90%] ml-[5%]">
                        <Link to="/signin" className="no-underline">
                            <button className="w-full border-none text-left pl-4 bg-[#fff] py-4 rounded-md">
                                Rewards
                            </button>
                        </Link>
                    </li>

                    <li onClick={toggelNavbar} className="w-[90%] ml-[5%]">
                        <Link to="/signin" className="no-underline">
                            <button className="w-full border-none text-left pl-4 bg-[#fff] py-4 rounded-md">
                                Promotions
                            </button>
                        </Link>
                    </li>

                    <li onClick={toggelNavbar} className="w-[90%] ml-[5%]">
                        <Link to="/signin" className="no-underline">
                            <button className="w-full border-none text-left pl-4 bg-[#fff] py-4 rounded-md">
                                Help & Support
                            </button>
                        </Link>
                    </li>
                </ul>
            </section>
        </div>
    );
}

export default SideMenu;