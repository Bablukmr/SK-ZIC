
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { userLogIn, userLogin, getUserData } from "../store/action";
import { useNavigate } from "react-router-dom";
import LoadingAni from '../components/loading';
import { notification } from 'antd';
export default function AdminSignIn() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const token = useSelector((state) => state.AuthReducer.token);
    const loadingLogin = useSelector((state) => state.AuthReducer.loadingLogin);

    const [email, setEmail] = useState(null)
    const [pass, setPass] = useState(null)

    // console.log("loadingLogin", loadingLogin);
    // console.log("token", token);

    useEffect(() => {
        if (token) navigate("/admin");
    }, [token]);



    const ss = (e) => {
        e.preventDefault()
        let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (regexEmail.test(email)) {
            dispatch(userLogIn(email, pass));
        }
        else {
            notification['error']({
                message: "Error !!",
                description: "Not a valid email !!"
            })
        }
    }


    return (
        <div className="bg-[redd] w-full h-screen flex flex-col">

            {loadingLogin ?
                <LoadingAni /> :
                <>
                    <div className="w-full bg-[greenn] h-[80px] flex items-center justify-center">
                        <p>Logo</p>
                    </div>
                    <div className="w-full bg-[orangee] h-[100px]  flex flex-col items-center justify-center">
                        <h2 className="m-0 p-0">Admin Login</h2>
                    </div>

                    <div className="w-full bg-[yelloww] flex flex-1 items-center  justify-center">
                        <form className="bg-[redd] w-[75%] sm:w-1/4 flex flex-col gap-y-6 mt-[-60px]">
                            <div className="flex flex-col gap-y-2">
                                <label><small>Email </small></label>

                                <div className="border-[#232627] bg-[#fafafa] rounded-md border border-solid
                                      flex items-center px-2">

                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-4 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z" />
                                    </svg>



                                    <input
                                        type="email"
                                        className=" text-sm h-1 border-none w-full bg-[#fafafa] outline-none py-4 px-2"
                                        placeholder="Email"
                                        onChange={(e) => {
                                            setEmail(e.target.value);
                                        }}
                                    />

                                </div>
                            </div>
                            <div className="flex flex-col gap-y-2">
                                <label><small>Password</small></label>

                                <div className="border-[#232627] bg-[#fafafa] rounded-md border border-solid 
                                     flex items-center px-2">

                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        fill="none" viewBox="0 0 24 24"
                                        strokeWidth={1.5} stroke="currentColor"
                                        className="w-4 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                                    </svg>

                                    <input
                                        type="password"
                                        className=" text-sm h-1 border-none w-full bg-[#fafafa] outline-none py-4 px-2"
                                        placeholder="Password"
                                        onChange={(e) => {
                                            setPass(e.target.value);
                                        }}
                                    />
                                </div>
                            </div>
                            <small className="cursor-pointer w-[120px] font-semibold">Forgot Password ?</small>
                            <button className="h-[35px] bg-[#23262d] text-white rounded-md cursor-pointer
              outline-none border-transparent focus:border-transparent focus:ring-0"
                                onClick={ss}>
                                Login
                            </button>
                            <div className="flex">
                                <small className="">Don't have an account? </small>
                                <small className="cursor-pointer underline ml-2">Sign Up </small>
                            </div>
                        </form>

                    </div >
                </>
            }
        </div >)
}
