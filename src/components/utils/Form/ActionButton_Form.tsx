type ActionButton_Form_Prop = {
  children?: React.ReactNode;
  text: string;
  isSubmitting: boolean;
};

function ActionButton_Form(props: ActionButton_Form_Prop) {
  return (
    <button
      className="form-action-button"
      type="submit"
      disabled={props.isSubmitting}
    >
      {props.isSubmitting ? "Submitting..." : props.text}
    </button>
  );
}

export default ActionButton_Form;
