import { useState } from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { Form, Link } from "react-router-dom";

type SignupFormProp = {
  children?: React.ReactNode;
  isSignup: boolean;
};

function SignupForm({ isSignup }: SignupFormProp) {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  function handlePasswordShow(): void {
    setIsPasswordVisible((prevValue) => !prevValue);
  }
  return (
    <div className="form-parent-container">
      <div className="form-container">
        <h1 className="not-selectable hidden-caret form-title ">
          Sign Up Form
        </h1>

        <Form method="post" className="form-component ">
          <div className="form-field-container ">
            <label htmlFor="email" className="form-input-labels">
              * Email :
            </label>
            <div className="field-container ">
              <input
                type="email"
                id="email"
                className="form-input-elements"
                name="email"
                placeholder="Enter your email..."
                required
                autoComplete="email"
              />
            </div>
          </div>
          <div className="form-field-container">
            <label htmlFor="password" className="form-input-labels">
              Password :
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
          <button className="form-action-button" type="submit">
            Login
          </button>
        </Form>
      </div>
      <div className="switch-auth-form">
        {isSignup && (
          <p>
            Already have an account ? <Link to={"/auth?mode=login"}>Login</Link>
          </p>
        )}
      </div>
    </div>
  );
}

export default SignupForm;
