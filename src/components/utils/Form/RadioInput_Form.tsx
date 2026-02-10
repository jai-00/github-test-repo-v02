type RadioInput_Form_Prop = {
  options: string[];
  legend: string;
  isRequired?: boolean;
};

function RadioInput_Form(props: RadioInput_Form_Prop) {
  const isRequired: boolean = props.isRequired || false;
  return (
    <div className="radio-input-container form-input-elements">
      {/* <legend>{props.legend}</legend> */}
      {/* <div className="radio-input-fieldTitle"> */}
      <div className="form-input-labels">
        {/* {isRequired && " * "}Gender : */}
        <div
          className={!isRequired ? "field-isNotRequired" : "field-isRequired"}
        >
          <span>*</span>
        </div>
        {/* {isRequired && " * "} */}
        <div className="form-input-label-name ">{props.legend}</div>
        <div className="field-colon ">:</div>
      </div>
      {/* <div className="radio-input-option-container "> */}
      <div className="field-container">
        {props.options.map((option, index) => (
          <label key={option} className="radio-input-options">
            <input
              type="radio"
              name="gender"
              value={option}
              defaultChecked={index === 0 && true}
            />
            {option}
          </label>
        ))}
      </div>
    </div>
  );
}

export default RadioInput_Form;
