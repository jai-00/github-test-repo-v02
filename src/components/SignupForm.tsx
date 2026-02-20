import TextInput_Form from "./utils/Form/TextInput_Form";
import PasswordInput_Form from "./utils/Form/PasswordInput_Form";
import ActionButton_Form from "./utils/Form/ActionButton_Form";
import RadioInput_Form from "./utils/Form/RadioInput_Form";

type signupFormProps = {
  children?: React.ReactNode;
  isSubmitting: boolean;
};

function SignupForm(props: signupFormProps) {
  return (
    <>
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
        <ActionButton_Form text="Sign Up" isSubmitting={props.isSubmitting} />
      </div>
    </>
  );
}

export default SignupForm;
