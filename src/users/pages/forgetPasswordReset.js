import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { notification } from "antd";

export default function ForgetPasswordReset(props) {
  const { uid } = useParams();
  const { token } = useParams();

  const [pass, setPass] = useState(null);
  const [confirmPass, setConfirmPass] = useState(null);

  // useEffect(() => {
  //   console.log(uid);
  //   console.log(token);
  //   console.log(props.params);
  // });

  const sendEmail = (e) => {
    e.preventDefault();
    if (pass === confirmPass) {
      axios
        .post("http://localhost:8000/dj-rest-auth/password/reset/confirm/", {
          uid: uid,
          token: token,
          new_password1: pass,
          new_password2: pass,
        })
        .then(() => {
          notification["success"]({
            message: "Success !!",
            description: "Password reset done.",
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
        description: "Password does not match..",
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
          <input
            placeholder="New Password"
            type="password"
            onChange={(e) => {
              setPass(e.target.value);
            }}
            className=" text-sm rounded-md h-1 w-full bg-[#fafafa] border-none  outline-none py-4 px-2"
          />
        </div>
        <div
          className="border-[#232627] w-full mt-2  bg-[#fafafa]
         rounded-md border border-solid flex items-center justify-center"
        >
          <input
            placeholder="Confirm Password"
            type="password"
            onChange={(e) => {
              setConfirmPass(e.target.value);
            }}
            className=" text-sm rounded-md h-1 w-full bg-[#fafafa] border-none  outline-none py-4 px-2"
          />
        </div>

        <br />

        <button
          type="submit"
          className="cursor-pointer w-full h-[2.3rem] rounded-md
                   bg-[#333333] hover:bg-[#333333de] text-white"
        >
          Reset Password{" "}
        </button>
      </form>
    </div>
  );
}
