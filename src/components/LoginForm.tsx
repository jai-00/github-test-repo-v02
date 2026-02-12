import { Form, Link } from "react-router-dom";
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
    <div className="form-parent-container">
      <div className="form-container ">
        <h1 className="not-selectable hidden-caret form-title ">Login Form</h1>

        <Form method="post" className="form-component ">
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
        </Form>
      </div>
      <div className="switch-auth-form">
        <Link to={"/auth?mode=signup"}>Create a new account</Link>
      </div>
    </div>
  );
}

export default LoginForm;
