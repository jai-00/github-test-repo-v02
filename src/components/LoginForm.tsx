import TextInput_Form from "./utils/Form/TextInput_Form";
import PasswordInput_Form from "./utils/Form/PasswordInput_Form";
import ActionButton_Form from "./utils/Form/ActionButton_Form";
import { demoUserAuth } from "../backend replica/authData";
import { useState } from "react";

function LoginForm() {
  const [userInputData, setUserInputData] = useState<{
    password: string;
    emailId: string;
  } | null>(null);

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
      <div className="form-action-button-container">
        <ActionButton_Form text="Login" />
        <button
          className="form-action-button"
          type="button"
          onClick={demoButtonClickHandler}
        >
          Demo Account
        </button>
      </div>
    </>
  );
}

export default LoginForm;
