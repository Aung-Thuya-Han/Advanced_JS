const userArray = [
  {name: 'Alice', age: 25},
  {name: 'Bob'},
  {age: 30},
  {name: 'Eve', age: null},
];

function processUserData(user) {

// ?? is only used when the value is null or undefined.

  const name = user.name ?? 'Guest';
  const age = user.age ?? 18;

  return `Welcome, ${name}! You are ${age} years old.`;
}

for (const user of userArray) {
  console.log(processUserData(user));
}