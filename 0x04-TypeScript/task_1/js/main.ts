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

// console.log(printTeacher("John", "Doe"));

