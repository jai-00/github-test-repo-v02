import { Form, Link } from "react-router-dom";
import TextInput_Form from "./utils/Form/TextInput_Form";
import PasswordInput_Form from "./utils/Form/PasswordInput_Form";
import ActionButton_Form from "./utils/Form/ActionButton_Form";
import RadioInput_Form from "./utils/Form/RadioInput_Form";

function SignupForm() {
  return (
    <div className="form-parent-container">
      <div className="form-container">
        <h1 className="not-selectable hidden-caret form-title ">
          Sign Up Form
        </h1>

        <Form method="post" className="form-component ">
          <TextInput_Form fieldName="email" isRequired label="Email" />
          <TextInput_Form
            fieldName="occupation"
            isRequired={false}
            label="Occupation"
          />

          <RadioInput_Form
            isRequired
            legend="Gender"
            options={["Male", "Female", "Other"]}
          />
          <PasswordInput_Form label="Password" name="password" />
          <PasswordInput_Form label="Confirm Password" name="conf_Password" />

          <ActionButton_Form text="Sign Up" />
        </Form>
      </div>
      <div className="switch-auth-form">
        {/* {isSignup && ( */}
        <p>
          Already have an account ? <Link to={"/auth?mode=login"}>Login</Link>
        </p>
        {/* )} */}
      </div>
    </div>
  );
}

export default SignupForm;
