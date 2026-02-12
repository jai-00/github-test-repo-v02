import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

type PasswordInput_Form_Prop = {
  children?: React.ReactNode;
  label: string;
  name: string;
  value?: string;
};

function PasswordInput_Form(props: PasswordInput_Form_Prop) {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  function handlePasswordShow(): void {
    setIsPasswordVisible((prevValue) => !prevValue);
  }
  return (
    <div className="form-field-container">
      <label htmlFor={props.name} className="form-input-labels ">
        <div className="field-isRequired ">
          <span>*</span>
        </div>

        <div className="form-input-label-name ">{props.label}</div>
        <div className="field-colon ">:</div>
      </label>
      <div className="field-container password-container">
        <input
          type={isPasswordVisible ? "text" : "password"}
          id={props.name}
          className="form-input-elements"
          name={props.name}
          placeholder="Enter your password..."
          required
          autoComplete="current-password"
          defaultValue={props.value ? props.value : ""}
        />
        <button
          onClick={handlePasswordShow}
          type="button"
          className="password-visibility-toggle-button"
        >
          {isPasswordVisible ? <FaEyeSlash /> : <FaEye />}
        </button>
      </div>
    </div>
  );
}

export default PasswordInput_Form;
