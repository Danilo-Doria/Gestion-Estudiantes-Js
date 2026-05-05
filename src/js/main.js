let option = 0;
let students = [];


// functions

function addStudents(students) {
  let valid = false;

  let id = 0;

  while (valid === false) {
    try {
      const input = prompt("Enter the student's id: ");
      id = Number(input);

      if (input === null) {
        console.log("Operation cancelled.");
        return;
      }

      if (isNaN(id)) {
        throw new Error("ID must be a number");
      }

      if (id < 0) {
        throw new Error("The ID must be positive");
      }

      if (input.trim() === "") {
        throw new Error("The ID can't be empty.");
        break;
      }

      console.log("Valid ID entered:", id);
      valid = true;
    } catch (error) {
      console.error("Invalid input:", error.message);
    }
  }

  for (let student of students) {
    if (id === student['id']) {
      console.warn("This ID already exists");
      return;
    }
  }

  student = {
    'id': id
  };

  students.push(student);
}

function showStudents(students){
    //console.table(students);
    
    if (students.length === 0){
        console.log("The list of students is empty!!");
        return;
    }

    for (let student of students){
        console.log(`ID: ${student['id']}`)
    }
}

while (option != 8) {
  console.log("\nWelcome to the Student Management System\n");
  let input = prompt(`Select the desired option:
    1. Register new students
    2. Consult list of students
    3. Search student
    4. Update data of a student
    5. Delete student
    6. Save in CSV file
    7. Load from CSV file
    8. Exit`);

  if (input === null) {
    option = 8;
  } else {
    option = Number(input);
  }

  switch (option) {
    case 1:
      addStudents(students);
      break;

    case 2:
      showStudents(students);
      break;

    case 3:
      console.log("Search not implemented yet");
      break;

    case 4:
      console.log("Update not implemented yet");
      break;

    case 5:
      console.log("Delete not implemented yet");
      break;

    case 6:
      console.log("Save CSV not implemented yet");
      break;

    case 7:
      console.log("Load CSV not implemented yet");
      break;

    case 8:
      console.log("Exiting...");
      break;

    default:
      console.log("Invalid option");
  }
}
