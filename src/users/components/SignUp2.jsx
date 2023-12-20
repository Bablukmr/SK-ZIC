import { Link } from "react-router-dom";
import { notification } from "antd";
import MyButton from "../../components/button";
import { useSelector } from "react-redux";

function SignUp2(props) {
  const darkMode = useSelector((state) => state.AuthReducer.darkMode);
  const { previousStep, nextStep, formState, handleChange } = props;
  console.log(formState.type);

  const handleSubmit = (e) => {
    e.preventDefault();

    const type = formState?.type;
    const rtoName = formState?.rtoName;
    const address = formState?.address;
    const email = formState?.email;
    const gender = formState?.gender;
    const frontlinerType = formState?.frontlinerType;
    const Supplier = formState?.Supplier;
    const RtoAddress = formState?.RtoAddress;
    const StoreName = formState?.StoreName;
    const OwnersName = formState?.OwnersName;
    const phoneNumber = formState?.phoneNumber;

    console.log(email);

    if (type === "1") {
      if (!address) {
        notification.error({
          message: "Error !!",
          description: "Address missing.",
        });
      } else if (address && !gender) {
        notification.error({
          message: "Error !!",
          description: "Gender missing.",
        });
      } else if (address && gender && !frontlinerType) {
        notification.error({
          message: "Error !!",
          description: "Frontliner Type missing.",
        });
      } else if (address && gender && frontlinerType && !rtoName) {
        notification.error({
          message: "Error !!",
          description: "RTO name missing.",
        });
      } else if (
        address &&
        gender &&
        frontlinerType &&
        rtoName &&
        !RtoAddress
      ) {
        notification.error({
          message: "Error !!",
          description: "RTO name missing.",
        });
      } else {
        nextStep();
      }
    } else if (type === "2") {
      if (!StoreName) {
        notification.error({
          message: "Error !!",
          description: "Store name missing.",
        });
      } else if (StoreName && !address) {
        notification.error({
          message: "Error !!",
          description: "Address missing.",
        });
      } else if (StoreName && address && !OwnersName) {
        notification.error({
          message: "Error !!",
          description: "Owners Name missing.",
        });
      } else if (StoreName && address && OwnersName && !phoneNumber) {
        notification.error({
          message: "Error !!",
          description: "Contact Number missing.",
        });
      } else if (StoreName && address && OwnersName && phoneNumber && !email) {
        notification.error({
          message: "Error !!",
          description: "Email missing.",
        });
      } else if (
        StoreName &&
        address &&
        OwnersName &&
        phoneNumber &&
        email &&
        !Supplier
      ) {
        notification.error({
          message: "Error !!",
          description: "Email missing.",
        });
      } else {
        let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (regexEmail.test(email)) {
          nextStep();
        } else {
          notification.error({
            message: "Error !!",
            description: "Wrong email format.",
          });
        }
      }
    }

    // else  {
    //   let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    //   if (regexEmail.test(email)) {
    //     nextStep();
    //   } else {
    //     notification.error({
    //       message: "Error !!",
    //       description: "Wrong email format.",
    //     });
    //   }
    // }
  };

  // if (!rtoName) {
  //   notification["error"]({
  //     message: "Error !!",
  //     description: "RTO name missing.",
  //   });
  // }

  // if (rtoName && !address) {
  //   notification["error"]({
  //     message: "Error !!",
  //     description: "Address missing.",
  //   });
  // }

  // let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  // if (rtoName && address) {
  //   if (!email) {
  //     notification["error"]({
  //       message: "Error !!",
  //       description: "Email missing.",
  //     });
  //   } else {
  //     if (regexEmail.test(email)) {
  //       nextStep();
  //     } else {
  //       notification["error"]({
  //         message: "Error !!",
  //         description: "Wrong email format.",
  //       });
  //     }
  //   }
  // }

  return (
    <div
      className={` ${
        darkMode ? "bg-slate-800 text-white" : ""
      } sm:relative min-h-[calc(100vh-60px)]  flex items-center flex-col justify-center`}
    >
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
        className=" flex mt-[70px] gap-y-4 flex-col items-center w-[75%] sm:w-[25%]"
      >
        {formState.type === "1" ? (
          <>
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
                  className="w-4 h-5 text-[#232627]"
                >
                  <path
                    strokeLinecap="round"
                    d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"
                  />
                </svg>
                <input
                  value={formState.address}
                  onChange={(e) => handleChange(e.target.value, "address")}
                  placeholder="Address"
                  className=" text-sm h-1 border-none w-full bg-[#fafafa] outline-none py-4 px-2"
                />
              </div>
            </div>

            <div className="w-full ">
              <label>
                <small>Gender</small>
              </label>
              <div className="w-full mt-3">
                <select
                  value={formState.gender}
                  onChange={(e) => handleChange(e.target.value, "gender")}
                  placeholder="Gender"
                  className="w-full h-[40px] rounded-md px-3 outline-none border-none"
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div className="w-full">
              <label>
                <small>Age</small>
              </label>
              <div className="border-[#232627] mt-2 bg-[#fafafa] rounded-md border border-solid flex items-center px-2">
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
                    d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"
                  />
                </svg>
                <input
                  type="number"
                  value={formState.age}
                  onChange={(e) => handleChange(e.target.value, "age")}
                  placeholder="Age"
                  className=" text-sm h-1 border-none w-full bg-[#fafafa] outline-none py-4 px-2"
                />
              </div>
            </div>

            <div className="w-full ">
              <label>
                <small>Frontliner Type</small>
              </label>
              <div className="w-full mt-3">
                <select
                  placeholder="Frontliner Type"
                  value={formState.frontlinerType}
                  onChange={(e) =>
                    handleChange(e.target.value, "frontlinerType")
                  }
                  className="w-full h-[40px] rounded-md px-3 outline-none border-none"
                >
                  <option value="staff">Staff</option>
                  <option value="mechanic ">Mechanic </option>
                  <option value="etc">Etc</option>
                </select>
              </div>
            </div>

            <div className="w-full">
              <label>
                <small>RTO Name</small>
              </label>
              <div className="border-[#232627] mt-2 bg-[#fafafa] rounded-md border border-solid flex items-center px-2">
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
                    d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"
                  />
                </svg>
                <input
                  value={formState.rtoName}
                  onChange={(e) => handleChange(e.target.value, "rtoName")}
                  placeholder="RTO Name"
                  className=" text-sm h-1 border-none w-full bg-[#fafafa] outline-none py-4 px-2"
                />
              </div>
            </div>

            <div className="w-full mb-3">
              <label>
                <small>RTO Address</small>
              </label>
              <div className="border-[#232627] mt-2 bg-[#fafafa] rounded-md border border-solid flex items-center px-2">
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
                    d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"
                  />
                </svg>
                <input
                  value={formState.RtoAddress}
                  onChange={(e) => handleChange(e.target.value, "RtoAddress")}
                  placeholder="RTO Address"
                  className=" text-sm h-1 border-none w-full bg-[#fafafa] outline-none py-4 px-2"
                />
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="w-full">
              <label>
                <small>Store Name</small>
              </label>
              <div className="border-[#232627] mt-2 bg-[#fafafa] rounded-md border border-solid flex items-center px-2">
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
                    d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"
                  />
                </svg>
                <input
                  value={formState.StoreName}
                  onChange={(e) => handleChange(e.target.value, "StoreName")}
                  placeholder="Store Name"
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
                  className="w-4 h-5 text-[#232627]"
                >
                  <path
                    strokeLinecap="round"
                    d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"
                  />
                </svg>
                <input
                  value={formState.address}
                  onChange={(e) => handleChange(e.target.value, "address")}
                  placeholder="Address"
                  className=" text-sm h-1 border-none w-full bg-[#fafafa] outline-none py-4 px-2"
                />
              </div>
            </div>
            <div className=" w-full">
              <label>
                <small>Owners Name</small>
              </label>
              <div className="border-[#232627] mt-2 bg-[#fafafa] rounded-md border border-solid flex items-center px-2">
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
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  />
                </svg>

                <input
                  value={formState.OwnersName}
                  onChange={(e) => handleChange(e.target.value, "OwnersName")}
                  placeholder="Owners Name"
                  className=" text-sm h-1 border-none w-full bg-[#fafafa] outline-none py-4 px-2"
                />
              </div>
            </div>

            <div className="bg-[greeen]  w-full">
              <label>
                <small>Contact Number</small>
              </label>
              <div className="border-[#232627] mt-2 bg-[#fafafa] rounded-md border border-solid flex items-center px-2">
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
                  className="w-4 h-5 text-[#232627]"
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
                  type="text"
                  placeholder="Email"
                  className=" text-sm h-1 border-none w-full bg-[#fafafa] outline-none py-4 px-2"
                />
              </div>
            </div>
            <div className="bg-[greeen]  w-full">
              <label>
                <small>Supplier</small>
              </label>
              <div className="border-[#232627] mt-2 mb-3 bg-[#fafafa] rounded-md border border-solid flex items-center px-2">
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
                <input
                  value={formState.Supplier}
                  onChange={(e) => handleChange(e.target.value, "Supplier")}
                  type="text"
                  placeholder="Supplier"
                  className=" text-sm h-1 border-none w-full bg-[#fafafa] outline-none py-4 px-2"
                />
              </div>
            </div>
          </>
        )}

        <MyButton
          //  className="mt-5"
          type="submit"
          text="Next"
          mdh="h-[35px]"
          mdw="w-full"
          bgColor={`${darkMode ? "bg-red-500" : "bg-[#23262d]"}`}
          textColor="text-white"
        />
        <div className="flex bg-[rsed] my-6  items-center">
          <small className="p-0 m-0">Already have an account? </small>
          <Link to="/signin" className="underline ml-2 mt-[-5px]">
            <small
              className={`p-0 m-0 ${
                darkMode ? "text-slate-400" : "text-black"
              } underline`}
            >
              Login Now
            </small>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default SignUp2;
