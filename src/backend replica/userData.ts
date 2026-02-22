class User {
  email: string;
  id: string;
  gender: "male" | "female" | "other";
  // age: number;
  password: string;
  occupation: string | "";

  constructor({
    email,
    gender,
    occupation,
    password,
  }: {
    email: string;
    gender: "male" | "female" | "other";
    // age: number;
    // isEmployed: boolean;
    password: string;
    occupation?: string | "";
  }) {
    this.email = email;
    this.gender = gender;
    // this.age = age;
    this.password = password;
    this.occupation = occupation ?? "";
    this.id = crypto.randomUUID();
  }
}

export default User;
export const userData: User[] = JSON.parse(
  localStorage.getItem("userData") || "[]",
);
