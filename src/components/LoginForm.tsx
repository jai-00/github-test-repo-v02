import TextInput_Form from "./utils/Form/TextInput_Form";
import PasswordInput_Form from "./utils/Form/PasswordInput_Form";
import ActionButton_Form from "./utils/Form/ActionButton_Form";
import { demoUserAuth } from "../backend replica/authData";
import { useState } from "react";

function LoginForm() {
  //state managing values for the input data in the form input fields
  const [userInputData, setUserInputData] = useState<{
    password: string;
    emailId: string;
  } | null>(null);

  //Demo account login handler function
  function demoButtonClickHandler() {
    const { password, emailId } = demoUserAuth();
    setUserInputData({ password, emailId });
  }

  return (
    <>
      <TextInput_Form
        fieldName="email"
        isRequired={true}
        label="Email"
        value={userInputData?.emailId}
      />

      <PasswordInput_Form
        label="Password"
        name="password"
        value={userInputData?.password}
      />

      <div className="form-action-button-container ">
        <button
          className="form-action-button "
          type="button"
          onClick={demoButtonClickHandler}
        >
          Demo Account
        </button>

        <ActionButton_Form text="Login" />
      </div>
    </>
  );
}

export default LoginForm;
