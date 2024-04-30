// main.ts

// Interface for teacher
interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}

// Interface for Directors
interface Directors extends Teacher {
    numberOfReports: number;
}

// Interface for printTeacher function
interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
    return `${firstName.charAt(0)}. ${lastName}`
}


// Interface for the StudentClass constructor parameters
interface StudentConstructor {
  firstName: string, lastName: string;
}

// Interface for the StudentClass
interface StudentClass {
  workOnHomework(): string;
  displayName(): string;
}

class Student implements StudentClass {
    firstName: string;
    lastName: string;

    constructor({firstName, lastName}: StudentConstructor) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(): string {
        return "Currently working";
    }

    displayName(): string {
        return this.firstName;
    }
}

// const student1 = new Student({ firstName: "Daniel", lastName: "Chuks" });
// console.log(student1.workOnHomework())
// console.log(student1.displayName())
