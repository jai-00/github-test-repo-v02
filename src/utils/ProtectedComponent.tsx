type ProtectedComponentProp = {
  children?: React.ReactNode;
};

function ProtectedComponent({ children }: ProtectedComponentProp) {
  return <>{children}</>;
}

export default ProtectedComponent;
