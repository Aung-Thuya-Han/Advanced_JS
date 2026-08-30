const tasks = [
  {title: 'Buy groceries', priority: 'High'},
  {title: 'Read a book', priority: 'Medium'},
  {title: 'Go for a run', priority: 'Low'},
];

function getFormattedTasks(tasksToFormat) {
  const formattedTasks = [];

  tasksToFormat.forEach(function (task) {
    const formattedTask = `Task: ${task.title}, Priority: ${task.priority}`;
    formattedTasks.push(formattedTask);
  });

  return formattedTasks;
}

const formattedTasks = getFormattedTasks(tasks);
console.log(formattedTasks);
