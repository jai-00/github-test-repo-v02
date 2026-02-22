import { Form, Link, useNavigation } from "react-router-dom";
import ActionButton_Form from "../components/utils/Form/ActionButton_Form";
import PasswordInput_Form from "../components/utils/Form/PasswordInput_Form";
import TextInput_Form from "../components/utils/Form/TextInput_Form";
import { useState } from "react";
import { demoUserAuth } from "../backend replica/authData";

function Login() {
  //state managing values for the input data in the form input fields
  const [userInputData, setUserInputData] = useState<{
    password: string;
    email: string;
  } | null>(null);

  //checking for submission state
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  //Demo account login handler function
  function demoButtonClickHandler() {
    const { password, email } = demoUserAuth();
    setUserInputData({ password, email });
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

            <ActionButton_Form isSubmitting={isSubmitting} text="Login" />
          </div>
        </Form>
      </div>
      <div className="switch-auth-form">
        <Link to={"/auth/signup"}>Create a new account</Link>
      </div>
    </div>
  );
}

export default Login;
