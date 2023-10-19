import React, { useState } from 'react'
import SideMenu from './sideMenu';
import { Link } from 'react-router-dom';
export default function MobileHeader() {
    const [navbarOpen, setNavbarOpen] = useState(false);

    const toggelNavbar = () => {
        setNavbarOpen(!navbarOpen)
    }

    return (
        <>
            <div className='bg-white h-[60px] flex justify-between shadow-[0px_1px_10px_0px_#f0f0f0]'>

                <div className='flex justify-center items-center w-1/5 bg-[ccyan]'>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none" viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-6 h-6 font-bold"
                        onClick={toggelNavbar}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </div>

                <div className='w-1/2 bg-[greeen] flex items-center justify-center'>
                    <img src='/logo.png' className='w-[80px] h-[20px]' />
                </div>

                <div className='flex justify-center items-center w-[30%] bg-[ccyan]'>
                    <Link to="/signin" className="no-underline text-black">
                        <button className='border-none py-2 px-4 bg-[#fff]'>
                            Log In
                        </button>
                    </Link>
                </div>


                <div
                    className={`${!navbarOpen
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
            </div >
        </>

    )
}
