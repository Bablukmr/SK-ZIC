import { Link } from "react-router-dom";
import { notification } from "antd";

function SignUp2(props) {
  const { previousStep, nextStep, formState, handleChange } = props;
  const handleSubmit = (e) => {
    e.preventDefault();

    const rtoName = formState?.rtoName;
    const address = formState?.address;
    const email = formState?.email;

    if (!rtoName) {
      notification["error"]({
        message: "Error !!",
        description: "RTO name missing.",
      });
    }

    if (rtoName && !address) {
      notification["error"]({
        message: "Error !!",
        description: "Address missing.",
      });
    }

    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (rtoName && address) {
      if (!email) {
        notification["error"]({
          message: "Error !!",
          description: "Email missing.",
        });
      } else {
        if (regexEmail.test(email)) {
          nextStep();
        } else {
          notification["error"]({
            message: "Error !!",
            description: "Wrong email format.",
          });
        }
      }
    }
  };

  return (
    <div className="sm:relative min-h-[calc(100vh-60px)]  flex items-center flex-col justify-center">
     <div className="w-full flex">
       <div
        className="cursor-pointer sm:z-10 ml-[10%] sm:ml-10 mt-3"
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
      <div className="sm:absolute mr-[22%] w-full flex items-center justify-center">
        <h2 className=" text-xl sm:text-2xl text-center p-0">Sign Up</h2>
      </div>
     </div>

      <form
        onSubmit={handleSubmit}
        className=" flex mt-[70px] gap-y-4 flex-col items-center w-[75%] sm:w-[30%]"
      >
        <div className="bg-[greeen] w-full ">
          <label>
            <small>RTO Name </small>
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
                d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
              />
            </svg>

            <input
              value={formState.rtoName}
              onChange={(e) => handleChange(e.target.value, "rtoName")}
              placeholder="Transport Office"
              className=" text-sm h-1 border-none w-full bg-[#fafafa] outline-none py-4 px-2"
            />
          </div>
        </div>
        <div className="w-full">
          <label>
            <small>Address</small>
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
                d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"
              />
            </svg>
            <input
              value={formState.address}
              onChange={(e) => handleChange(e.target.value, "address")}
              placeholder="XYZ Transport Office"
              className=" text-sm h-1 border-none w-full bg-[#fafafa] outline-none py-4 px-2"
            />
          </div>
        </div>
        <div className="bg-[greeen] w-full">
          <label>
            <small>Email </small>
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
              value={formState.email}
              onChange={(e) => handleChange(e.target.value, "email")}
              placeholder="email"
              className=" text-sm h-1 border-none w-full bg-[#fafafa] outline-none py-4 px-2"
            />
          </div>
        </div>

        <button
          type="submit"
          className="cursor-pointer w-full h-[2.3rem] mt-5 rounded-md bg-[#333333] hover:bg-[#333333de]
           text-white"
        >
          Next
        </button>

        <div className="flex bg-[rsed] mt-6 items-center">
          <small className="p-0 m-0">Already have an account? </small>
          <Link to="/signin" className="underline ml-2 text-black mt-[-5px]">
            <small className="p-0 m-0">Login Now</small>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default SignUp2;

/* <svg
          onClick={previousStep}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1}
          stroke="currentColor"
          className="w-6 h-6 p-0 m-0"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
          />
        </svg> */
