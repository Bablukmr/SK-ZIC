import React, { useState } from "react";
import SignUp1 from "../components/SignUp1";
import SignUp2 from "../components/SignUp2";
import SignUp3 from "../components/SignUp3";
import SignUp4 from "../components/SignUp4";

const stepComponents = [SignUp1, SignUp2, SignUp3];

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
// console.log(formState);
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

  const renderForm = () => {
    const CurrentStepComponent = stepComponents[formState.step - 1];

    if (CurrentStepComponent) {
      return (
        <CurrentStepComponent
          previousStep={handlePreviousStep}
          nextStep={handleNextStep}
          formState={formState}
          handleChange={handleFieldUpdate}
        />
      );
    } else {
      return (
        <div className="flex items-center font-Poppins mt-8 flex-col justify-center">
          <h1>Sign Up Successfully</h1>
          <button className="w-20 py-2 px-5 m-2 rounded-md bg-fuchsia-900">
            LogIn
          </button>
        </div>
      );
    }
  };

  return <div className="">{renderForm()}</div>;
}

export default SignUp;
