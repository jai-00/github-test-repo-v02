type TestProps = {
  children?: React.ReactNode;
  value: number;
};

export default function Test(props: TestProps) {
  return <h1>{props.value}</h1>;
}
