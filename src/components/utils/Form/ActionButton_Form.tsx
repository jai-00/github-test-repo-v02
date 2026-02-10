type ActionButton_Form_Prop = {
  children?: React.ReactNode;
  text: string;
};

function ActionButton_Form(props: ActionButton_Form_Prop) {
  return (
    <button className="form-action-button" type="submit">
      {props.text}
    </button>
  );
}

export default ActionButton_Form;
