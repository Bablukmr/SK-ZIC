import React, { useState } from "react";
import { Link } from "react-router-dom";
import { notification } from "antd";

function SignUp1(props) {
  const { nextStep, formState, handleChange } = props;

  const handleSubmit = (e) => {
    e.preventDefault();

    const firstName = formState?.firstName;
    const lastName = formState?.lastName;
    const Id = formState?.ID;

    if (!firstName) {
      notification["error"]({
        message: "Error !!",
        description: "First name missing.",
      });
    }
    if (firstName && !lastName) {
      notification["error"]({
        message: "Error !!",
        description: "Last name missing.",
      });
    }
    if (firstName && lastName && !Id) {
      notification["error"]({
        message: "Error !!",
        description: "Imgae ID missing.",
      });
    }
    if (firstName && lastName && Id) {
      nextStep();
    }
  };

  const [inputVal, setInputVal] = useState(formState.ID);
  // const [image, setImage] = useState(formState.ID);

  const handleDelete = () => {
    setInputVal(null);
    handleChange(null, "ID");
  };

  const handleFileChange = (e) => {
    handleChange(e.target.files[0], "ID");
    setInputVal(e.target.files[0]);
    // setImage(URL.createObjectURL(e.target.files[0]))
    // console.log(URL.createObjectURL(e.target.files[0]));
  };

  // console.log(formState.ID);
  //datauri**
  const setShowImage = () => {
    return inputVal ? URL.createObjectURL(inputVal) : "";
  };

  return (
    <div className="relative min-h-[calc(100vh-60px)]  flex items-center flex-col justify-center">
      <div className=" absolute top-[30px] w-full">
        <h2 className=" text-xl sm:text-2xl text-center p-0">Sign Up</h2>
      </div>

      <form
        className=" flex mt-[40px] flex-col gap-y-4 items-center w-[40%] bg-[bluee]"
        onSubmit={handleSubmit}
      >
        <div className="w-full bg-[reed]  sm:flex sm:justify-center gap-3 my-3">
          <div className=" w-1/2 bg-[greeen]">
            <label>
              <small>First name </small>
            </label>
            <div
              className="border-[#232627] mt-2 rounded-md border border-solid flex items-center 
              px-2"
            >
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
                value={formState.firstName}
                onChange={(e) => handleChange(e.target.value, "firstName")}
                placeholder="First name"
                className=" text-sm h-1 border-none w-full bg-[#fafafa] outline-none py-4 px-2"
              />
            </div>
          </div>
          <div className="w-1/2 bg-[yeellow]">
            <label>
              <small>Last name </small>
            </label>
            <div
              className="border-[#232627] mt-2 rounded-md border border-solid flex items-center 
                          px-2"
            >
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
                value={formState.lastName}
                onChange={(e) => handleChange(e.target.value, "lastName")}
                placeholder="Last name"
                className="text-sm h-1 border-none w-full bg-[#fafafa] outline-none py-4 px-2"
              />
            </div>
          </div>
        </div>

        <div className="w-full">
          <label>
            <small> ID </small>
          </label>

          <div className="">
            {inputVal === null ? (
              <div
                onClick={() => document.querySelector("#input_field").click()}
                className="flex w-full my-2 flex-col justify-center items-center border-2 border-dashed h-[2.2rem] sm:w-auto rounded-md cursor-pointer border-sky-400"
              >
                <input
                  id="input_field"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleFileChange}
                />
                <label className="cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 "
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                    />
                  </svg>
                </label>
              </div>
            ) : (
              <div
                className="flex mt-3 mb-2 rounded-md "
                // border border-solid border-[#232627]"
              >
                <div className="h-[120px]">
                  <img
                    src={setShowImage()}
                    alt="IDIMG"
                    className="rounded-sm object-fill  max-w-full   h-full"
                  />
                </div>

                <div className="flex ml-4 items-center">
                  <svg
                    onClick={handleDelete}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-5 cursor-pointer"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                </div>
              </div>
            )}
          </div>
        </div>

        <button
          type="submit"
          className="cursor-pointer w-[15rem] sm:w-[22rem] h-[2.3rem] mt-3 rounded-md bg-[#333333] hover:bg-[#333333de] text-white"
        >
          Next
        </button>

        <div className="flex bg-[rsed] mt-6 items-center ">
          <small className="p-0 m-0">Already have an account? </small>
          <Link to="/signin" className="underline ml-2 text-black mt-[-5px]">
            <small className="p-0 m-0">Login Now</small>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default SignUp1;

// import React from "react";
// import { Link } from "react-router-dom";

// function SignUp1(props) {
//   const { nextStep, formState, handleChange } = props;

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     nextStep();
//   };

//   return (
//     <div className="relative min-h-[calc(100vh-60px)]  flex items-center flex-col justify-center">
//       <div className=" absolute top-[30px] w-full">
//         <h2 className=" text-xl sm:text-2xl text-center p-0">Sign Up</h2>
//       </div>

//       <form
//         className=" flex mt-[40px] flex-col items-center w-[50%] bg-[bleue]"
//         onSubmit={handleSubmit}
//       >
//         <div className="m-2 sm:m-4">
//           {/* <h3>User Details</h3> */}
//           <div className="w-full sm:w-auto sm:flex sm:justify-center gap-3 my-3">
//             <div>
//               <label className="block">
//                 <label>
//                   <small>First name </small>
//                 </label>
//                 <div className="border-[#232627] mt-2 bg-[#fafafa] rounded-md border border-solid flex items-center px-2">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     strokeWidth={1.5}
//                     stroke="currentColor"
//                     className="w-4 h-5"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
//                     />
//                   </svg>
//                   {/* </div> */}
//                   <input
//                     value={formState.FirstName}
//                     onChange={(e) => handleChange(e.target.value, "FirstName")}
//                     placeholder="First name"
//                     className=" text-sm h-1 border-none w-full bg-[#fafafa] outline-none py-4 px-2"
//                   />
//                 </div>
//               </label>
//             </div>
//             <div>
//               <label className="block">
//                 <label>
//                   <small>Last name </small>
//                 </label>
//                 <div className="border-[#232627] mt-2 bg-[#fafafa] rounded-md border border-solid flex items-center px-2">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     strokeWidth={1.5}
//                     stroke="currentColor"
//                     className="w-4 h-5"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
//                     />
//                   </svg>
//                   {/* </div> */}
//                   <input
//                     value={formState.LastName}
//                     onChange={(e) => handleChange(e.target.value, "LastName")}
//                     placeholder="Last name"
//                     className=" text-sm h-1 border-none w-full bg-[#fafafa] outline-none py-4 px-2"
//                   />
//                 </div>
//               </label>
//             </div>
//           </div>
//           <div>
//             <label>
//               <small>Image ID </small>
//             </label>
//             <div
//               onClick={() => document.querySelector("#input_field").click()}
//               className="flex my-2 flex-col justify-center items-center border-2 border-dashed h-[2.2rem] w-full sm:w-auto rounded-md cursor-pointer border-sky-400"
//             >
//               <input
//                 id="input_field"
//                 type="file"
//                 accept="image/*"
//                 style={{ display: "none" }}
//                 onChange={(e) => handleChange(e.target.files[0], "ID")}
//               />
//               <label className="cursor-pointer">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   strokeWidth={1.5}
//                   stroke="currentColor"
//                   className="w-6 h-6"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
//                   />
//                 </svg>
//               </label>
//             </div>
//           </div>
//         </div>

//         <button
//           type="submit"
//           className="w-[15rem] sm:w-[22rem] h-[2.3rem] mt-3 rounded-md bg-[#333333] hover:bg-[#333333de] text-white"
//         >
//           Next
//         </button>

//         <div className="flex bg-[rsed] mt-6 items-center">
//           <small className="p-0 m-0">Already have an account? </small>
//           <Link to="/signin" className="underline ml-2 text-black mt-[-5px]">
//             <small className="p-0 m-0">Login Now</small>
//           </Link>
//         </div>

//         {/* <div className="mt-6 text-sm">
//           <p className="text-center">
//             Already have an account?{" "}
//             <span className="underline cursor-pointer ml-2">Login Now</span>
//           </p>
//         </div> */}
//       </form>
//     </div>
//   );
// }

// export default SignUp1;
