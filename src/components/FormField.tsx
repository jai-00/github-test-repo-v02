type FormFieldProp = {
  children?: React.ReactNode;
};

function FormField(props: FormFieldProp) {
  return <>{props.children ? props.children : null}</>;
}

export default FormField;
