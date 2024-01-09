import React, { useState, useEffect } from "react";
import CheckMobileHook480 from "../../components/checkMobile";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { userLogIn, userLogin, getUserData } from "../../store/action";
import { notification } from "antd";
import LoadingAni from "../../components/loading";
import MyButton from "../../components/button";

export default function UserSignIn() {
  const darkMode = useSelector((state) => state.AuthReducer.darkMode);
  const isMobile = CheckMobileHook480();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const token = useSelector((state) => state.AuthReducer.token);
  const loadingLogin = useSelector((state) => state.AuthReducer.loadingLogin);

  const urlToGo = useSelector((state) => state.AuthReducer.urlToGo);

  console.log("URL", urlToGo);

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  useEffect(() => {
    if (urlToGo) {
      if (token) navigate(urlToGo);
    } else {
      if (token) navigate("/app");
    }
  }, [token]);

  const ss = (e) => {
    e.preventDefault();

    if (!pass) {
      notification["error"]({
        message: "Error !!",
        description: "Password missing.",
      });
      return;
    }

    if (!email) {
      notification["error"]({
        message: "Error !!",
        description: "Email missing.",
      });
      return;
    } else {
      let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (regexEmail.test(email)) {
        dispatch(userLogIn(email, pass));
      } else {
        notification["error"]({
          message: "Error !!",
          description: "Not a valid email !!",
        });
      }
    }
  };

  return (
    <div className="flex items-center justify-center h-[calc(100vh-60px)]">
      {loadingLogin ? (
        <LoadingAni />
      ) : (
        <>
          {/* {!isMobile && (
            <div
              className={`w-1/2 h-full ${
                darkMode ? "bg-slate-800 text-white" : ""
              }  flex items-center justify-center`}
            >
            </div>
          )} */}

          {/* <img src="/2df2.jpg" width={300} height={300} /> */}

          <div
            className={`${
              darkMode ? "bg-slate-800 text-white" : ""
            } w-full  flex flex-col justify-center items-center h-full`}
          >
            <div className=" bg-[oange] w-full mt-[-40px] lg:mt-[-20px] flex flex-col items-center">
              <div className="bg-[redd] w-3/4 lg:w-1/2">
                <h2 className="text-center">Sign In</h2>
              </div>

              <form className="bg-[redd]  w-[75%] sm:w-[25%] flex flex-col gap-y-6 ">
                <div className="flex flex-col gap-y-2">
                  <label>
                    <small>Email </small>
                  </label>
                  <div className="border-[#232627] bg-[#fafafa] rounded-md border border-solid flex items-center px-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-5 text-[#232627]"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z"
                      />
                    </svg>

                    <input
                      type="email"
                      value={email}
                      className=" text-sm h-1 border-none w-full bg-[#fafafa] outline-none py-4 px-2"
                      placeholder="Email"
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-y-2">
                  <label>
                    <small>Password</small>
                  </label>

                  <div
                    className="border-[#232627] bg-[#fafafa] rounded-md border border-solid
                            flex items-center px-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-5 text-[#232627]"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                      />
                    </svg>

                    <input
                      type="password"
                      className=" text-sm h-1 border-none w-full bg-[#fafafa] outline-none py-4 px-2"
                      placeholder="Password"
                      onChange={(e) => {
                        setPass(e.target.value);
                      }}
                      value={pass}
                    />
                  </div>
                </div>
                <small className="cursor-pointer font-semibold w-fit">
                  <Link
                    to="/forget-password"
                    className={` ${
                      darkMode ? "text-slate-400" : "text-black"
                    } no-underline`}
                  >
                    Forgot Password ?
                  </Link>
                </small>
                {/* <button
                  className={`h-[35px] bg-[#23262d] text-white rounded-md cursor-pointer
                  outline-none border-transparent focus:border-transparent focus:ring-0`}
                  onClick={ss}
                >
                  Login
                </button> */}

                <MyButton
                  text="Login"
                  mdh="h-[35px]"
                  mdw="w-full"
                  bgColor={`${darkMode ? "bg-red-500" : "bg-[#23262d]"}`}
                  textColor="text-white"
                  onClick={ss}
                />

                <div className="flex bg-[rsed] h-[40px] items-center">
                  <small className="p-0 m-0">Don't have an account? </small>
                  <Link
                    to="/signup"
                    className={`underline ml-2 ${
                      darkMode ? "text-slate-400" : "text-black"
                    } mt-[-5px]`}
                  >
                    <small className="p-0 m-0">Sign Up Now</small>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
