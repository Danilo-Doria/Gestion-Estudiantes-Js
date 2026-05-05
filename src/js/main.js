let option = 0;
let students = [];


// functions

function addStudents(students) {

  // ID validator
  let studentId = 0;

  let valid = false;

  while (valid === false) {
    
    studentId = parseInt(prompt("Enter the student's id: "));

    if (!studentId || studentId < 0) {
      console.log("Please enter a valid ID.");
      continue;
    }

    console.log(`Valid ID entered: ${studentId}`);

    valid = true;
  }

  for (let i of students) {
    if (studentId === i['id']) {
      console.warn("This ID already exists");
      return;
    }
  }


  // Students's Name
  let studentName = prompt("Enter the student's name: ");

  valid = false;

  while (valid === false)

    if (!studentName){
      console.log("Operation cancelled.");
      continue;
    }

  console.log(`Name entered: ${studentName}`);
  valid = true;

  let student = {
    'id': studentId,
    'name': studentName
  };

  students.push(student);
}

function showStudents(students) {
  //console.table(students);

  if (students.length === 0) {
    console.log("The list of students is empty!!");
    return;
  }

  for (let i of students) {
    console.log(`ID: ${i['id']} | Name: ${i['name']}`)
  }
}

while (option != 8) {
  console.log("\nWelcome to the Student Management System\n");
  option = parseInt(prompt(`Select the desired option:
    1. Register new students
    2. Consult list of students
    3. Search student
    4. Update data of a student
    5. Delete student
    6. Save in CSV file
    7. Load from CSV file
    8. Exit`));

  if (isNaN(option)) {
    option = 8;
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
