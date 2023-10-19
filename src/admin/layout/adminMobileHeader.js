import React, { useState } from 'react'

export default function AdminMobileHeader(props) {
    const { setNavbarOpen, navbarOpen } = props;

    const toggelNavbar = () => {
        setNavbarOpen(!navbarOpen)
    }

    return (
        <div className='h-[50px] bg-[#f0f0f0] fixed w-full flex items-center'>

            <div className='flex justify-center items-center z-40 w-1/5 bg-[ccyan]'>
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


            <div className='absolute w-full flex justify-center items-center bg-[ccyan]'>
                <img src='/logo.png' className='w-[80px] h-[20px]' />
            </div>

        </div>
    )
}
