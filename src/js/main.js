let option = 0;
let students = [];

// functions
// Add students

function addStudents(students) {
  // ID validator
  let studentId = 0;
  let valid = false;

  while (valid === false) {
    studentId = prompt("Enter the student's id: ").trim();

    if (!studentId || parseInt(studentId) < 0 || isNaN(parseInt(studentId))) {
      console.log("Please enter a valid ID.");
      continue;
    }

    studentId = parseInt(studentId);
    console.log(`Valid ID entered: ${studentId}`);
    valid = true;
  }

  for (let i of students) {
    if (studentId === i["id"]) {
      console.warn("This ID already exists");
      return;
    }
  }

  // Students's Name
  let studentName = "";
  valid = false;

  while (valid === false) {
    studentName = prompt("Enter the student's name: ");

    if (!studentName) {
      console.log("Operation cancelled.");
      return;
    }

    console.log(`Name entered: ${studentName}`);
    valid = true;
  }

  // Age validator
  let studentAge = 0;

  valid = false;

  while (valid === false) {
    studentAge = prompt("Enter the student's age: ").trim();

    if (!studentAge || parseInt(studentAge) < 0 || parseInt(studentAge) > 120 || isNaN(parseInt(studentAge))) {
      console.log("Please enter a valid ID.");
      continue;
    }

    studentaGE = parseInt(studentAge);
    console.log(`Valid Age entered: ${studentAge}`);
    valid = true;
  }

  // Students's Course

  let studentCourse = "";
  valid = false;

  while (valid === false) {
    studentCourse = prompt("Enter the student's course: ");

    if (!studentCourse) {
      console.log("Operation cancelled.");
      return;
    }

    console.log(`Course entered: ${studentCourse}`);
    valid = true;
  }

  // Students's Course

  let studentState = "";
  valid = false;

  while (valid === false) {
    studentState = prompt("Enter the student's state 'active' or 'inactive': ")
      .trim()
      .toLowerCase();

    if (!studentState) {
      console.log("Operation cancelled.");
      return;
    }

    if (studentState !== "active" && studentState !== "inactive") {
      console.log("Please only enter 'active' or 'inactive'.");
      continue;
    }

    console.log(`State entered: ${studentState}`);
    valid = true;
  }

  let student = {
    'id': studentId,
    'name': studentName,
    'age': studentAge,
    'course': studentCourse,
    'state': studentState,
  };

  students.push(student);
}

// Show students
function showStudents(students) {
  if (students.length === 0) {
    console.log("The list of students is empty!!");
    return;
  }

  for (let i of students) {
    console.log(
      `ID: ${i["id"]}\nName: ${i["name"]}\nAge: ${i["age"]}\nCourse: ${i["course"]}\nState: ${i["state"]}`,
    );
  }
}

// Search students
function searchStudents(students) {
  if (students.length === 0) {
    console.log("The list of students is empty!!");
    return;
  }

  let studentId = 0;
  let valid = false;

  while (valid === false) {
    studentId = prompt("Enter the student's id: ").trim();

    if (!studentId || parseInt(studentId) < 0 || isNaN(parseInt(studentId))) {
      console.log("Please enter a valid ID.");
      continue;
    }

    studentId = parseInt(studentId);

    for (let i of students) {
      if (studentId === i['id']) {
        console.log(`ID: ${i["id"]}\nName: ${i["name"]}\nAge: ${i["age"]}\nCourse: ${i["course"]}\nState: ${i["state"]}`);
      }
    }
    console.log(`The student with the ID: ${studentId} does not exists`)
    valid = true;
  }
}

// Update students
function updateStudents(students) {
  if (students.length === 0) {
    console.log("The list of students is empty!!");
    return;
  }

  let studentId = 0;
  let valid = false;

  while (valid === false) {
    studentId = prompt("Enter the student's id: ").trim();

    if (!studentId || parseInt(studentId) < 0 || isNaN(parseInt(studentId))) {
      console.log("Please enter a valid ID.");
      continue;
    }

    studentId = parseInt(studentId);

    let found = false;

    for (let i of students) {
      if (studentId === i['id']) {
        found = true;

        // Students's Name
        let studentName = "";
        valid = false;

        while (valid === false) {
          studentName = prompt("Enter the student's name: ");

          if (!studentName) {
            console.log("Operation cancelled.");
            return;
          }

          console.log(`Name entered: ${studentName}`);
          valid = true;
        }

        // Age validator
        let studentAge = 0;

        valid = false;

        while (valid === false) {
          studentAge = prompt("Enter the student's age: ").trim();

          if (!studentAge || parseInt(studentAge) < 0 || parseInt(studentAge) > 120 || isNaN(parseInt(studentAge))) {
            console.log("Please enter a valid age.");
            continue;
          }

          studentAge = parseInt(studentAge);
          console.log(`Valid Age entered: ${studentAge}`);
          valid = true;
        }

        // Students's Course

        let studentCourse = "";
        valid = false;

        while (valid === false) {
          studentCourse = prompt("Enter the student's course: ");

          if (!studentCourse) {
            console.log("Operation cancelled.");
            return;
          }

          console.log(`Course entered: ${studentCourse}`);
          valid = true;
        }

        // Students's State

        let studentState = "";
        valid = false;

        while (valid === false) {
          studentState = prompt("Enter the student's state 'active' or 'inactive': ")
            .trim()
            .toLowerCase();

          if (!studentState) {
            console.log("Operation cancelled.");
            return;
          }

          if (studentState !== "active" && studentState !== "inactive") {
            console.log("Please only enter 'active' or 'inactive'.");
            continue;
          }

          console.log(`State entered: ${studentState}`);
          valid = true;
        }

        i['name'] = studentName
        i['age'] = studentAge
        i['course'] = studentCourse
        i['state'] = studentState

        console.log(`The student with the ID: ${studentId} was updated succesfully`)

        break;
      }
    }
    if (!found) {
      console.log(`The student with the ID: ${studentId} does not exists`)
    }
    valid = true;
  }
}

// Delete students

function deleteStudents(students) {
  // ID validator
  let studentId = 0;
  let valid = false;
  let found = false

  if (students.length === 0) {
    console.log("The list of students is empty!!");
    return;
  }

  while (valid === false) {
    studentId = prompt("Enter the student's id: ").trim();

    if (!studentId || parseInt(studentId) < 0 || isNaN(parseInt(studentId))) {
      console.log("Please enter a valid ID.");
      continue;
    }

    studentId = parseInt(studentId);
    
    for (let i of students) {
      if (studentId === i['id']) {
        found = true;
        students.splice(i, 1);
        console.log("Student deleted successfully");
        break;
      }
    }
    if (!found) {
      console.log(`The student with the ID: ${studentId} does not exists`)
    }
    valid = true;
  }
}

while (option != 6) {
  console.log("\nWelcome to the Student Management System\n");
  option = prompt(`Select the desired option:
    1. Register new students
    2. Consult list of students
    3. Search student
    4. Update data of a student
    5. Delete student
    6. Exit`);

  if (!option) {
    option = 6;
  }

  option = parseInt(option);

  switch (option) {
    case 1:
      addStudents(students);
      break;

    case 2:
      showStudents(students);
      break;

    case 3:
      searchStudents(students);
      break;

    case 4:
      updateStudents(students);
      break;

    case 5:
      deleteStudents(students);
      break;

    case 6:
      console.log("Exiting...");
      break;

    default:
      console.log("Invalid option");
  }
}
