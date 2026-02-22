import TextInput_Form from "./utils/Form/TextInput_Form";
import PasswordInput_Form from "./utils/Form/PasswordInput_Form";
import ActionButton_Form from "./utils/Form/ActionButton_Form";
import { demoUserAuth } from "../backend replica/authData";
import { useState } from "react";

type loginFormProps = {
  children?: React.ReactNode;
  isSubmitting: boolean;
};

function LoginForm(props: loginFormProps) {
  //state managing values for the input data in the form input fields
  const [userInputData, setUserInputData] = useState<{
    password: string;
    email: string;
  } | null>(null);

  //Demo account login handler function
  function demoButtonClickHandler() {
    const { password, email } = demoUserAuth();
    setUserInputData({ password, email });
  }

  return (
    <>
      <TextInput_Form
        fieldName="email"
        isRequired={true}
        label="Email"
        value={userInputData?.email}
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

        <ActionButton_Form isSubmitting={props.isSubmitting} text="Login" />
      </div>
    </>
  );
}

export default LoginForm;
