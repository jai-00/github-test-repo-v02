class User {
    name: string;
    id: string;
    gender: "male" | "female" | "other";
    age: number;
    isEmployed:boolean;

    constructor({name, gender, age, isEmployed}: {name: string; gender: "male" | "female" | "other"; age: number; isEmployed: boolean}){
        this.name = name;
        this.gender = gender;
        this.age = age;
        this.isEmployed = isEmployed;
        this.id = crypto.randomUUID();
    }
}

export default User;
export const userData: User[] = [];

