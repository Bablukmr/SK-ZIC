import MyButton from '../../components/button'
import { Link } from 'react-router-dom'


export default function DesktopHeader() {
    return (

        <div className='bg-[greeen] h-[60px] flex justify-between'>
            <div className='flex justify-center items-center w-1/5 bg-[cyaan]'>
                <img src='/logo.png' className='w-[80px] h-[20px]' />
            </div>
            <div className='w-1/2 bg-[greeen] flex items-center'>
                <ul className='flex justify-evenly w-full list-none p-0'>

                    <li className='cursor-pointer'>
                        <Link to="/" className='no-underline text-black'>
                            Home
                        </Link>
                    </li>
                    <li className='cursor-pointer '>Rewards</li>
                    <li className='cursor-pointer '>Promotions</li>
                    <li className='cursor-pointer '>Help & Support</li>
                </ul>
            </div>
            <div className='flex w-1/5 justify-center items-center bg-[oorange]'>
                <Link to="/signin">
                    <MyButton
                        text="Login"
                        mdh="h-[30px]"
                        mdw="w-[80px]"
                        bgColor="bg-[#23262d]"
                        textColor="text-white"
                    />
                </Link>
                <div className='ml-4 '>
                    <Link to="/admin-signin">
                        <MyButton
                            text="Admin Login"
                            mdh="h-[30px]"
                            mdw="w-[120px]"
                            bgColor="bg-[#23262d]"
                            textColor="text-white"
                        />
                    </Link>
                </div>
            </div>
        </div >

    )
}
