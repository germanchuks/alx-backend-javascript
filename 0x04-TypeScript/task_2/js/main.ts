// main.ts

// Interface for Director
interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

// Interface for Teacher
interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

// Director class
class Director implements DirectorInterface {
    constructor() {}

    workFromHome(): string {
        return "Working from home";
    }

    getCoffeeBreak(): string {
        return "Getting a coffee break";
    }

    workDirectorTasks(): string {
        return "Getting to director tasks";
    }
}

// Teacher class
class Teacher implements TeacherInterface {
    constructor() {}

    workFromHome(): string {
        return "Cannot work from home";
    }

    getCoffeeBreak(): string {
        return "Cannot have a break";
    }

    workTeacherTasks(): string {
        return "Getting to work";
    }
}

// Function to create employee
const createEmployee = (salary: number | string) : Director | Teacher => {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher();
    }
    return new Director();
}

// Function to check if employee is Director
const isDirector = (employee: Director | Teacher): employee is Director => {
    return 'workDirectorTasks' in employee;
}

// Function to execute work
const executeWork = (employee: Director | Teacher) : void => {
    if (isDirector(employee)) {
        console.log(employee.workDirectorTasks());
    } else {
        console.log(employee.workTeacherTasks());
    }
}

// String literal allowing only two values; Math or History
type Subjects = 'Math' | 'History';

// Function to teach class
const teachClass = (todayClass: Subjects) : string => {
    if (todayClass === 'Math') {
        return 'Teaching Math';
    } else if (todayClass === 'History') {
        return 'Teaching History';
    } else {
        return '';
    }
}

// console.log(teachClass('Math'));
// console.log(teachClass('History'));

