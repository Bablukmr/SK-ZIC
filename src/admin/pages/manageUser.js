import { Link } from 'react-router-dom'
import MyButton from '../../components/button';
import CheckMobileHook480 from "../../components/checkMobile";

export default function ManageUsers() {
  const isMobile = CheckMobileHook480();

  let d = [{}, {}]
  return (
    <div className='w-full bg-[reed]'>
      <div className='flex bg-[redd] justify-between w-full md:w-3/5 items-center'>
        <h2>Manage Users</h2>
        <MyButton
          text="Add"
          mdh="h-[35px]"
          mdw="w-[80px]"
          bgColor="bg-[#23262d]"
          textColor="text-white" />
      </div>

      <div className='flex bg-[redd] justify-between w-full md:w-3/5 items-center h-[35px]
       rounded-md
       border-[#232627] border border-solid mt-2'>
        <input type='search' className='w-[calc(100%-80px)] rounded-md h-[35px] outline-none border-none px-2' />
        <MyButton text="Search"
          mdh="h-[35px]"
          mdw="w-[80px]"
          bgColor="bg-[#23262d]"
          textColor="text-white" />
      </div>

      <div className='w-[100%] mt-14 flex flex-col bg-[reed]'>
        <div className='flex bg-[reed] w-[65%] md:w-[40%] mb-4 justify-'>
          <small className='w-1/4 text-center'>No</small>
          <small className='w-3/4 text-center'>Profile</small>
        </div>
        {d.map(e => (
          <div className='flex mt-2 border-[#f5f5f5] py-2 border-0 border-solid border-b-2'>
            <div className='flex bg-[greeen] w-[65%] md:w-[40%] justify-center'>
              <p className='w-1/4 text-center'>1</p>
              <div className='flex w-3/4 bg-[reed] items-center justify-center'>
                <div className='bg-white rounded-full w-[40px] h-[40px] mr-1'>
                  <img src='/2df2.jpg' className='rounded-full object-cover h-[40px] w-[40px]' />
                </div>
                <div className='flex flex-col text-left bg-[greeen] ml-1'>
                  <p className='m-0 p-0 font-semibold'>Ranu Vijay</p>
                  <small className='m-0 p-0 mt-0.5 text-[#8c8c8c]'>Id: 2346879</small>
                </div>
              </div>
            </div>
            <div className='flex bg-[greeen] w-[35%] md:w-[60%] justify-around items-center'>
              <Link to='/admin/user-detail' className="no-underline text-black">
                <p className='p-0 m-0 text-[15px]'>View Detail</p>
              </Link>
              {!isMobile &&
                <>
                  <MyButton text="Restrict"
                    mdh="h-[30px]"
                    mdw="w-[80px]"
                    textColor="text-[#23262d]"
                  />
                  <MyButton text="Delete" mdh="h-[30px]" mdw="w-[80px]"
                    bgColor="bg-[#23262d]"
                    textColor="text-white"
                  />
                </>}
            </div>

          </div>
        ))}
      </div>

    </div>
  )
}
