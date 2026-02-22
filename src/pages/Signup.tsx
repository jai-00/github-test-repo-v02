import { Form, Link, useNavigation } from "react-router-dom";
import ActionButton_Form from "../components/utils/Form/ActionButton_Form";
import PasswordInput_Form from "../components/utils/Form/PasswordInput_Form";
import RadioInput_Form from "../components/utils/Form/RadioInput_Form";
import TextInput_Form from "../components/utils/Form/TextInput_Form";

function Signup() {
  //checking for submission state
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <div className="form-parent-container">
      <div className="form-container ">
        <h1 className="not-selectable hidden-caret form-title ">Signup Form</h1>
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
          <div className="form-action-button-container ">
            <ActionButton_Form text="Sign Up" isSubmitting={isSubmitting} />
          </div>
        </Form>
      </div>
      <div className="switch-auth-form">
        <p>
          Already have an account ? <Link to={"/auth/login"}>Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
