import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

type PasswordInput_Form_Prop = {
  children?: React.ReactNode;
  label: string;
};

function PasswordInput_Form(props: PasswordInput_Form_Prop) {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  function handlePasswordShow(): void {
    setIsPasswordVisible((prevValue) => !prevValue);
  }
  return (
    <div className="form-field-container">
      <label htmlFor="password" className="form-input-labels">
        * {props.label && "Password"} :
      </label>
      <div className="field-container password-container">
        <input
          type={isPasswordVisible ? "text" : "password"}
          id="password"
          className="form-input-elements"
          name="password"
          placeholder="Enter your password..."
          required
          autoComplete="current-password"
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
