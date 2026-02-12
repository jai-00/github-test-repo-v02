import TextInput_Form from "./utils/Form/TextInput_Form";
import PasswordInput_Form from "./utils/Form/PasswordInput_Form";
import ActionButton_Form from "./utils/Form/ActionButton_Form";
import RadioInput_Form from "./utils/Form/RadioInput_Form";

function SignupForm() {
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

      <ActionButton_Form text="Sign Up" />
    </>
  );
}

export default SignupForm;
