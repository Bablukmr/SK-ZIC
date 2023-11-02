import { useState } from "react";
import axios from "axios";
import { notification } from "antd";

export default function ForgetPassword() {
  const [email, setEmail] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (regexEmail.test(email)) {
      axios
        .post("http://localhost:8000/dj-rest-auth/password/reset/", {
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
    <div className="flex h-[calc(100vh-60px)] items-center justify-center">
      <form
        onSubmit={sendEmail}
        className="w-[75%] sm:w-1/4 mt-[-20px] flex flex-col items-center justify-center"
      >
        <div
          className="border-[#232627] w-full mt-2  bg-[#fafafa]
         rounded-md border border-solid flex items-center justify-center"
        >
          <div className="w-[8%] flex justify-center ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-5"
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
            className=" text-sm rounded-md h-1 w-full bg-[#fafafa] border-none  outline-none py-4 px-2"
          />
        </div>

        <br />
        <button
          type="submit"
          className="cursor-pointer w-full h-[2.3rem] rounded-md
                   bg-[#333333] hover:bg-[#333333de] text-white"
        >
          Send Recovery Mail
        </button>
      </form>
    </div>
  );
}
