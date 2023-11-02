import { Link } from "react-router-dom";
import axios from "axios";
import { notification } from "antd";
// import SignUp from "../pages/signup";

function SignUp3(props) {
  const {
    previousStep,
    setFormState,
    setSignup,
    setLoading,
    nextStep,
    formState,
    handleChange,
  } = props;

  const handleSubmit = (e) => {
    e.preventDefault();

    const userName = formState?.userName;
    const password = formState?.password;
    const userEmail = formState?.userEmail;
    const phoneNumber = formState?.phoneNumber;
    const firstName = formState?.firstName;
    const lastname = formState?.lastName;

    const rtoName = formState?.rtoName;
    const address = formState?.address;
    const email = formState?.email;

    if (!userName) {
      notification["error"]({
        message: "Error !!",
        description: "UserName missing.",
      });
      return;
    }

    if (!password) {
      notification["error"]({
        message: "Error !!",
        description: "Password missing.",
      });
      return;
    }

    if (!userEmail) {
      notification["error"]({
        message: "Error !!",
        description: "Email missing.",
      });
      return;
    } else {
      let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (!regexEmail.test(userEmail)) {
        notification["error"]({
          message: "Error !!",
          description: "Wrong email format.",
        });
        return;
      }
    }

    if (!phoneNumber) {
      notification["error"]({
        message: "Error !!",
        description: "Phone Number missing.",
      });
      return;
    }

    // handleChange(true, "loading");
    // handleChange(true, "signup");

    setSignup(true);
    setLoading(true);

    console.log("formState.ID", formState.ID);

    const formData = new FormData();
    formData.append("username", userName);
    formData.append("password1", password);
    formData.append("password2", password);
    formData.append("email", userEmail);

    formData.append("firstName", firstName);
    formData.append("lastName", lastname);
    formData.append("img", formState.ID);
    formData.append("rtoName", rtoName);

    formData.append("address", address);
    formData.append("email_c", email);
    formData.append("phoneNumber", phoneNumber);

    const body = formData;
    const config = {
      headers: {
        Accept: "application/json",
        "Content-Type": "multipart/form-data",
      },
    };

    axios
      .post(`http://localhost:8000/users/registerUser/`, body, config)
      .then((res) => {
        setLoading(false);
      })
      .catch((err) => {
        setSignup(false);
        setLoading(false);

        notification["error"]({
          message: "Error",
          description: "Something went wrong, try again.",
        });
      });

    // axios
    //   .post("http://localhost:8000/users/registerUser/", {
    //     username: ,
    //     password1: ,
    //     password2: ,
    //     email: ,

    //     firstName: ,
    //     lastName: ,

    //     img:

    //     rtoName: ,
    //     address: ,
    //     email_c: ,
    //     : phoneNumber,
    //   })
    //   .then((d) => {
    //     setLoading(false);
    //   })
    //   .catch((e) => {
    //     setSignup(false);
    //     setLoading(false);

    //     notification["error"]({
    //       message: "Error",
    //       description: "Something went wrong, try again.",
    //     });
    //     console.log(e);
    //   });
  };

  return (
    <div className="relative  min-h-[calc(100vh-60px)]  flex items-center flex-col justify-center">
      <div
        className="z-10 cursor-pointer absolute top-[30px] left-10"
        onClick={previousStep}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1}
          stroke="currentColor"
          className="w-10 h-10"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
      <div className=" absolute top-[30px] w-full">
        <h2 className=" text-xl sm:text-2xl text-center p-0">Sign Up</h2>
      </div>

      <form
        onSubmit={handleSubmit}
        className=" flex  mt-[110px] flex-col items-center gap-y-4 w-[75%] sm:w-[30%]"
      >
        <div className=" w-full">
          <label>
            <small>User Name</small>
          </label>
          <div className="border-[#232627] mt-2 bg-[#fafafa] rounded-md border border-solid flex items-center px-2">
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
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>

            <input
              value={formState.userName}
              onChange={(e) => handleChange(e.target.value, "userName")}
              placeholder="User Name"
              className=" text-sm h-1 border-none w-full bg-[#fafafa] outline-none py-4 px-2"
            />
          </div>
        </div>
        <div className="bg-[greeen]  w-full">
          <label>
            <small>Set Password</small>
          </label>
          <div className="border-[#232627] mt-2 bg-[#fafafa] rounded-md border border-solid flex items-center px-2">
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
                d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
              />
            </svg>
            <input
              value={formState.password}
              onChange={(e) => handleChange(e.target.value, "password")}
              type="password"
              placeholder="Password"
              className=" text-sm h-1 border-none w-full bg-[#fafafa] outline-none py-4 px-2"
            />
          </div>
        </div>
        <div className="bg-[greeen]  w-full">
          <label>
            <small>Email</small>
          </label>
          <div className="border-[#232627] mt-2 bg-[#fafafa] rounded-md border border-solid flex items-center px-2">
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
            <input
              value={formState.userEmail}
              onChange={(e) => handleChange(e.target.value, "userEmail")}
              type="text"
              placeholder="XXXX-XXXXXXXX"
              className=" text-sm h-1 border-none w-full bg-[#fafafa] outline-none py-4 px-2"
            />
          </div>
        </div>
        <div className="bg-[greeen]  w-full">
          <label>
            <small>Phone Number</small>
          </label>
          <div className="border-[#232627] mt-2 bg-[#fafafa] rounded-md border border-solid flex items-center px-2">
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
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.970 1.293c-.282.376-.769.542-1.21.380a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.380-1.210l1.293-.970c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25"
              />
            </svg>
            <input
              value={formState.phoneNumber}
              onChange={(e) => handleChange(e.target.value, "phoneNumber")}
              type="tel"
              placeholder="Phone Number"
              className=" text-sm h-1 border-none w-full bg-[#fafafa] outline-none py-4 px-2"
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-[15rem] sm:w-[22rem] h-[2.3rem] mt-3 rounded-md bg-[#333333] hover:bg-[#333333de] text-white"
        >
          SIgn Up
        </button>

        <div className="flex bg-[rsed] mt-6 items-center pb-8">
          <small className="p-0 m-0">Already have an account? </small>
          <Link to="/signin" className="underline ml-2 text-black mt-[-5px]">
            <small className="p-0 m-0">Login Now</small>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default SignUp3;
