import { useRef } from "react";

//! Type definition for the props
// type Feature1Prop = {
//   children?: React.ReactNode;
// };

export default function Feature1() {
  const userNameInputRef = useRef<HTMLInputElement>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="userName">Username</label>
      <input type="text" id="userName" name="username" ref={userNameInputRef} />
      <button>Submit</button>
    </form>
  );
}
