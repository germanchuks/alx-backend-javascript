// main.ts

// Interface for a student
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "Daniel",
    lastName: "Chuks",
    age: 25,
    location: "Nigeria"
}

const student2: Student = {
    firstName: "John",
    lastName: "Anthony",
    age: 26,
    location: "Ghana"
}

// Array containing two students
const studentsList: Array<Student> = [student1, student2];


// Function to render table
function renderTable(): void {
  // Create a new table element
  const table: HTMLTableElement = document.createElement("table");
  table.id = "studentsTable";

  // Create the table header row
  const theader: HTMLTableRowElement = table.createTHead().insertRow();
  theader.innerHTML = "<th>First Name</th><th>Location</th>";

  // Loop through students list and append a new row for each student
  studentsList.forEach((student) => {
    const row: HTMLTableRowElement = table.insertRow();

    // Insert cells into the row
    const cell1: HTMLTableCellElement = row.insertCell();
    const cell2: HTMLTableCellElement = row.insertCell();

    // Set the contents of the cells
    cell1.textContent = student.firstName;
    cell2.textContent = student.location;
  });

  document.body.appendChild(table);
}

document.addEventListener("DOMContentLoaded", renderTable);
