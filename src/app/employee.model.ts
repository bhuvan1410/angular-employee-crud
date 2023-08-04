export class Employee {
    name: string;
    age: number;
    email: string;
    occupation: string;
    editing?:boolean;
  
    constructor( name: string, age: number, email: string, occupation: string) {
      this.name = name;
      this.age = age;
      this.email = email;
      this.occupation = occupation;
      this.editing = false;
    }
  }