import { Form, Link } from "react-router-dom";
import TextInput_Form from "./utils/Form/TextInput_Form";
import PasswordInput_Form from "./utils/Form/PasswordInput_Form";
import ActionButton_Form from "./utils/Form/ActionButton_Form";

type LoginFormProp = {
  isLogin: boolean;
};

function LoginForm({ isLogin }: LoginFormProp) {
  return (
    <div className="form-parent-container">
      <div className="form-container ">
        <h1 className="not-selectable hidden-caret form-title ">Login Form</h1>

        <Form method="post" className="form-component ">
          <TextInput_Form fieldName="email" isRequired={true} label="Email" />
          <PasswordInput_Form label="Password" name="password" />

          <ActionButton_Form text="Login" />
        </Form>
      </div>
      <div className="switch-auth-form">
        {isLogin && <Link to={"/auth?mode=signup"}>Create a new account</Link>}
      </div>
    </div>
  );
}

export default LoginForm;
