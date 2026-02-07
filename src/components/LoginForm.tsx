import { Form, Link } from "react-router-dom";
import TextInput_Form from "./utils/TextInput_Form";
import PasswordInput_Form from "./utils/PasswordInput_Form";

type LoginFormProp = {
  isLogin: boolean;
};

function LoginForm({ isLogin }: LoginFormProp) {
  return (
    <div className="form-parent-container">
      <div className="form-container">
        <h1 className="not-selectable hidden-caret form-title ">Login Form</h1>

        <Form method="post" className="form-component ">
          <TextInput_Form fieldName="email" isRequired={true} label="Email" />
          <PasswordInput_Form label="Password" />
          <button className="form-action-button" type="submit">
            Login
          </button>
        </Form>
      </div>
      <div className="switch-auth-form">
        {isLogin && <Link to={"/auth?mode=signup"}>Create a new account</Link>}
      </div>
    </div>
  );
}

export default LoginForm;
