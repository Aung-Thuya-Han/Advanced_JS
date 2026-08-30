const expenses = [
  {category: 'Food', amount: 50},
  {category: 'Transportation', amount: 30},
  {category: 'Entertainment', amount: 20},
];

function calculateTotalExpenses(expensesToAdd) {
  return expensesToAdd.reduce(function (total, expense) {
    return total + expense.amount;
  }, 0);
}

const totalExpenses = calculateTotalExpenses(expenses);
console.log(totalExpenses);
