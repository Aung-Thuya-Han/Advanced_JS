const counterApp = (() => {
  let counter = 1;

  const increment = () => {
    counter += 1;
    return counter;
  };

  const reset = () => {
    counter = 0;
    return counter;
  };

  return {increment, reset};
})();

console.log('Exercise 1:', counterApp.increment());
console.log('Exercise 1:', counterApp.reset());



// ------------------------------------------------------------



const userArray = [
  {name: 'Alice', age: 25},
  {name: 'Bob'},
  {age: 30},
  {name: 'Eve', age: null},
];

const processUserData = user => {
  const name = user.name ?? 'Guest';
  const age = user.age ?? 18;
  return `Welcome, ${name}! You are ${age} years old.`;
};

userArray.forEach(user => {
  console.log('Exercise 2:', processUserData(user));
});



// ------------------------------------------------------------



const tasks = [
  {title: 'Buy groceries', priority: 'High'},
  {title: 'Read a book', priority: 'Medium'},
  {title: 'Go for a run', priority: 'Low'},
];

const getFormattedTasks = tasksToFormat => {
  const formattedTasks = [];

  tasksToFormat.forEach(task => {
    formattedTasks.push(
      `Task: ${task.title}, Priority: ${task.priority}`,
    );
  });

  return formattedTasks;
};

console.log('Exercise 4:', getFormattedTasks(tasks));



// ------------------------------------------------------------



const students = [
  {name: 'Alice', age: 20, grade: 'A'},
  {name: 'Bob', age: 21, grade: 'B'},
  {name: 'Eve', age: 19, grade: 'A'},
];

const getStudentNames = studentsToProcess =>
  studentsToProcess.map(student => student.name);

console.log('Exercise 5A:', getStudentNames(students));



// ------------------------------------------------------------



const clothes = [
  {type: 'shirt', size: 'M', color: 'red'},
  {type: 'pants', size: 'L', color: 'blue'},
  {type: 'dress', size: 'S', color: 'red'},
];

const getRedClothes = clothesToFilter =>
  clothesToFilter.filter(item => item.color === 'red');

console.log('Exercise 5B:', getRedClothes(clothes));



// ------------------------------------------------------------



const expenses = [
  {category: 'Food', amount: 50},
  {category: 'Transportation', amount: 30},
  {category: 'Entertainment', amount: 20},
];

const calculateTotalExpenses = expensesToAdd =>
  expensesToAdd.reduce(
    (total, expense) => total + expense.amount,
    0,
  );

console.log('Exercise 6:', calculateTotalExpenses(expenses));