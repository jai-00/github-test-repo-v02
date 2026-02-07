type TextInput_Form_Prop = {
  children?: React.ReactNode;
  fieldName: string;
  placeholder?: string;
  inputType?: string;
  label: string;
  isRequired: boolean;
};

function TextInput_Form(props: TextInput_Form_Prop) {
  const isRequired: boolean = props.isRequired || false;
  return (
    <div className="form-field-container ">
      <label htmlFor={props.fieldName} className="form-input-labels">
        {isRequired && " * "}
        {props.label} :
      </label>
      <div className="field-container ">
        <input
          type={props.inputType || props.fieldName}
          id={props.fieldName}
          className="form-input-elements"
          name={props.fieldName}
          placeholder={props.placeholder || `Enter your ${props.fieldName}...`}
          required={isRequired}
          autoComplete={props.fieldName}
        />
      </div>
    </div>
  );
}

export default TextInput_Form;
