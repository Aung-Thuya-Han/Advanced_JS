const students = [
  {name: 'Alice', age: 20, grade: 'A'},
  {name: 'Bob', age: 21, grade: 'B'},
  {name: 'Eve', age: 19, grade: 'A'},
];

function getStudentNames(studentsToProcess) {
  return studentsToProcess.map(function (student) {
    return student.name;
  });
}

const studentNames = getStudentNames(students);
console.log(studentNames);
