import { useState } from "react";
import axios from "axios";
import { notification } from "antd";
import MyButton from "../../components/button";
import { useSelector } from "react-redux";

export default function ForgetPassword() {
  const darkMode = useSelector((state) => state.AuthReducer.darkMode);
  const [email, setEmail] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (regexEmail.test(email)) {
      axios
        .post("https://api-dev.skzicph.com/dj-rest-auth/password/reset/", {
          email: email,
        })
        .then(() => {
          notification["success"]({
            message: "Success !!",
            description: "Email sent.",
          });
        })
        .catch(() => {
          notification["error"]({
            message: "Error !!",
            description: "Something went wrong.",
          });
        });
    } else {
      notification["error"]({
        message: "Error !!",
        description: "Wrong email format.",
      });
    }
  };

  return (
    <div className={`${
      darkMode ? "bg-slate-800 text-white" : ""
    }  flex h-[calc(100vh-60px)] items-center justify-center`}>
      <form
        onSubmit={sendEmail}
        className="w-[75%] sm:w-1/4 mt-[-20px] flex flex-col items-center justify-center"
      >
        <div
          className="border-[#232627] w-full mt-2  bg-[#fafafa]
         rounded-md border border-solid flex items-center justify-center"
        >
          <div className=" px-2 flex justify-center">
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
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
          </div>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email"
            className=" text-sm rounded-md h-1 w-full bg-[#fafafa] border-none  outline-none py-4 pr-2"
          />
        </div>

        <br />
        {/* <button
          type="submit"
          className="cursor-pointer w-full h-[2.3rem] rounded-md
                   bg-[#333333] hover:bg-[#333333de] text-white"
        >
          Send Recovery Mail
        </button> */}
          <MyButton
                 text="Login"
                 mdh="h-[35px]"
                 mdw="w-full"
                 bgColor={`${darkMode ? "bg-red-500":"bg-[#23262d]"}`}
                 textColor="text-white"
                 type="submit"
                />
      </form>
    </div>
  );
}
