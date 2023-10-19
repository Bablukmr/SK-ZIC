import { Link } from 'react-router-dom'
import CheckMobileHook480 from "../../components/checkMobile";

export default function Dashboard() {
    const isMobile = CheckMobileHook480();

    return (
        <div className='flex w-full md:w-[50%] md:ml-[25%] flex-wrap md:flex-nowrap md:flex-col justify-around items-center gap-y-8
         mt-4 md:mt-6 md:gap-y-4'>
            {!isMobile &&
                <p className='m-0 p-0 font-bold text-[32px]'>Admin Dasboard</p>
            }
            <Link to="/admin/manage-users" className='md:mt-4 no-underline text-[#000] w-[150px] md:w-[100%]'>
                <div className='rounded-md bg-[#dddddd] h-[150px] w-[150px] md:w-full md:h-[40px]'>
                    <div className='flex relative flex-col md:flex-row items-center justify-center md:justify-start h-[100%] pl-0 md:pl-4'>
                        <img src="/manageuser.png" />
                        <p className='md:ml-4 ml-0 text-center px-2'>Manage Promotions </p>
                        {/* User Account */}
                        {!isMobile &&
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6 absolute right-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                            </svg>
                        }
                    </div>

                </div>
            </Link>
            <Link to="#" className='no-underline text-[#000] w-[150px] md:w-[100%]'>
                <div className='rounded-md bg-[#dddddd] h-[150px] w-[150px] md:w-full md:h-[40px]'>
                    <div className='flex relative flex-col md:flex-row items-center justify-center md:justify-start h-[100%] pl-0 md:pl-4'>
                        <img src="/manageuser.png" />
                        <p className='md:ml-4 ml-0 text-center px-2'>Manage Promotions </p>
                        {!isMobile &&
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6 absolute right-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                            </svg>
                        }
                    </div>
                </div>
            </Link>
            <Link to="/admin/generate-qr" className='no-underline text-[#000] w-[150px] md:w-[100%]'>
                <div className='rounded-md bg-[#dddddd] h-[150px] w-[150px] md:w-full md:h-[40px]'>
                    <div className='flex relative flex-col md:flex-row items-center justify-center md:justify-start h-[100%] pl-0 md:pl-4'>
                        <img src="/manageuser.png" />
                        <p className='md:ml-4 ml-0 text-center px-2'>Generate QR Codes</p>
                        {!isMobile &&
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6 absolute right-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                            </svg>
                        }
                    </div>
                </div>
            </Link>
            <Link to="#" className='no-underline text-[#000] w-[150px] md:w-[100%]'>
                <div className='rounded-md bg-[#dddddd] h-[150px] w-[150px] md:w-full md:h-[40px]'>
                    <div className='flex relative flex-col md:flex-row items-center justify-center md:justify-start h-[100%] pl-0 md:pl-4'>
                        <img src="/manageuser.png" />
                        <p className='md:ml-4 ml-0 text-center px-2'>View Analytics</p>
                        {!isMobile &&
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6 absolute right-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                            </svg>
                        }
                    </div>
                </div>
            </Link>
            <Link to="#" className='no-underline text-[#000] w-[150px] md:w-[100%]'>
                <div className='rounded-md bg-[#dddddd] h-[150px] w-[150px] md:w-full md:h-[40px]'>
                    <div className='flex relative flex-col md:flex-row items-center justify-center md:justify-start h-[100%] pl-0 md:pl-4'>
                        <img src="/manageuser.png" />
                        <p className='md:ml-4 ml-0 text-center px-2'>Live Chat With User</p>
                        {!isMobile &&
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6 absolute right-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                            </svg>
                        }
                    </div>
                </div>
            </Link>
            <Link to="#" className='no-underline text-[#000] w-[150px] md:w-[100%] rounded-md'>
                <div className='rounded-md bg-[#dddddd] h-[150px] w-[150px] md:w-full md:h-[40px]' >
                    <div className='flex relative flex-col md:flex-row items-center justify-center md:justify-start h-[100%] pl-0 md:pl-4'>
                        <img src="/manageuser.png" />
                        <p className='md:ml-4 ml-0 text-center px-2'>My Profile</p>
                        {!isMobile &&
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6 absolute right-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                            </svg>
                        }
                    </div>
                </div>
            </Link>
        </div>
    )
}
