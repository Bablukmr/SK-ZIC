import MyButton from '../../components/button'
import CheckMobileHook480 from "../../components/checkMobile";

export default function UserDetail() {
    const isMobile = CheckMobileHook480();

    return (
        <div className='w-full md:w-[80%] md:ml-[10%] bg-[reed] mt-[10px] flex flex-col items-center justify-center'>
            <div className='bg-[#23262d] text-white w-full md:w-[80%] flex flex-col rounded-md 
            h-[200px] md:h-[160px]  md:px-5 pt-4 pb-8'>
                <small className='text-[#888888] text-right pr-2'>Status: Activated</small>
                <div className='bg-[greeen] flex h-full justify-between items-center'>
                    <div className='w-[45%] md:w-[35%] flex justify-center items-center bg-[greeen]' >
                        <div className='rounded-full w-[120px] h-[120px]'>
                            <img src='/2df2.jpg' className='rounded-full object-cover h-[120px] w-[120px]' />
                        </div>
                    </div>
                    <div className='w-[55%] md:w-[65%] bg-[reed] flex flex-col md:flex-row justify-between items-center md:px-2'>
                        <div className='flex flex-col items-center justify-center text-center bg-[gereen]'>
                            <p className='m-0 p-0 font-semibold'>Ranu Vijay</p>
                            <small className='m-0 p-0 mt-0.5 text-[#c4c4c4]'>Id: 2346879</small>
                        </div>
                        <div className='flex my-3 flex-col justify-center items-center mr-0 md:mr-6'>
                            <p className='p-0 m-0'>654</p>
                            <small className='p-0 m-0'>Available Points</small>
                        </div>
                        <MyButton
                            text="Adjust"
                            mdh="h-[30px]"
                            mdw="w-[70px]"
                            textColor="text-[23262d]"
                        />
                    </div>
                </div>
            </div>

            <div className='mt-[10px] flex md:flex-col h-[90px] justify-around items-center w-full'>
                <MyButton
                    text="Restrict"
                    mdh="h-[30px]"
                    mdw={`${isMobile ? "w-[45%]" : "w-[50%]"}`}
                    textColor="text-[#23262d]"
                    bgColor="bg-[#E6E6E6]"
                />
                <MyButton
                    text="Delete"
                    mdh="h-[30px]"
                    mdw={`${isMobile ? "w-[45%]" : "w-[50%]"}`}
                    textColor="text-white"
                    bgColor="bg-[#23262d]"
                />
            </div>
            <div className='mt-[10px] w-full md:w-[50%]  rounded-md bg-[#E6E6E6] text-[#333333] py-4'>
                <div className='px-4 space-y-2'>
                    <p className='m-0 p-0 font-semibold mb-4'>User Detail</p>
                    <p className='m-0 p-0'>Id:</p>
                    <p className='m-0 p-0'>RTO Name:</p>
                    <p className='m-0 p-0'>Address:</p>
                    <p className='m-0 p-0'>Email:</p>
                    <p className='m-0 p-0'>Phone Number:</p>
                </div>
            </div>

        </div>
    )
}
