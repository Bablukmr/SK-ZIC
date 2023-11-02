import React, { useState } from "react";
import SignUp1 from "../components/SignUp1";
import SignUp2 from "../components/SignUp2";
import SignUp3 from "../components/SignUp3";
// import SignUp4 from "../components/SignUp4";

import { Skeleton } from "antd";
import { Link } from "react-router-dom";

const stepComponents = [SignUp1, SignUp2, SignUp3];

// const stepComponents = [];

const defaultValue = {
  step: 1,
  firstName: "",
  lastName: "",
  ID: null,
  rtoName: "",
  address: "",
  email: "",
  userName: "",
  password: "",
  userEmail: "",
  phoneNumber: "",
};

function SignUp() {
  const [formState, setFormState] = useState(defaultValue);
 
  const [signup, setSignup] = useState(false);
  const [loading, setLoading] = useState(false);

  console.log(formState);

  const handleFieldUpdate = (value, fieldName) => {
    setFormState({
      ...formState,
      [fieldName]: value,
    });
  };

  const handleNextStep = () => {
    setFormState((prevState) => ({
      ...prevState,
      step: prevState.step + 1,
    }));
  };

  const handlePreviousStep = () => {
    setFormState((prevState) => ({
      ...prevState,
      step: prevState.step - 1,
    }));
  };

  // const renderForm = () => {
  const CurrentStepComponent = stepComponents[formState.step - 1];

  //   if (CurrentStepComponent) {
  //     return (
  //       <CurrentStepComponent
  //         previousStep={handlePreviousStep}
  //         nextStep={handleNextStep}
  //         formState={formState}
  //         handleChange={handleFieldUpdate}
  //       />
  //     );
  //   } else {
  //     return (
  //       <div className="flex items-center w-full h-[calc(100vh-60px)] justify-center">
  //         {formState?.loading ? (
  //           <div className="w-1/2">
  //             <Skeleton active avatar paragraph={{ rows: 4 }} />
  //           </div>
  //         ) : (
  //           <div className="mt-[-30px] flex flex-col items-center">
  //             <h1>Sign Up Successfully</h1>
  //             <Link to="/signin">
  //               <button
  //                 className="w-24 py-3 outline-none border-none cursor-pointer px-5
  //              text-white rounded-md bg-fuchsia-900"
  //               >
  //                 LogIn
  //               </button>
  //             </Link>
  //           </div>
  //         )}
  //       </div>
  //     );
  //   }
  // };

  return signup ? (
    <div className="flex items-center w-full h-[calc(100vh-60px)] justify-center">
      {loading ? (
        <div className="w-1/2">
          <Skeleton active avatar paragraph={{ rows: 4 }} />
        </div>
      ) : (
        <div className="mt-[-30px] flex flex-col items-center">
          <h1>Sign Up Successfully</h1>
          <Link to="/signin">
            <button
              className="w-24 py-3 outline-none border-none cursor-pointer px-5
               text-white rounded-md bg-fuchsia-900"
            >
              LogIn
            </button>
          </Link>
        </div>
      )}
    </div>
  ) : (
    <CurrentStepComponent
      previousStep={handlePreviousStep}
      nextStep={handleNextStep}
      formState={formState}
      handleChange={handleFieldUpdate}
      setFormState={setFormState}
      setSignup={setSignup}
      setLoading={setLoading}
    />
  );
}

export default SignUp;
