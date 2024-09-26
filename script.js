const incomeForm = document.getElementById("incomeForm");
const incomeAmount = document.getElementById("incomeAmount");
const expenseForm = document.getElementById("expenseForm");
const expenseAmount = document.getElementById("expenseAmount");
const expenseDesc = document.getElementById("expenseDesc");
const expenseCategory = document.getElementById("expenseCategory");
const displayIncome = document.getElementById("displayIncome");
const displayBalance = document.getElementById("displayBalance");
const expenseList = document.getElementById("expense-list");
let income = 0;
let expenses = [];

// income - eventListener
incomeForm.addEventListener("submit", (e) => {
  e.preventDefault();
  income = parseInt(incomeAmount.value);
  incomeAmount.value = "";
  displayIncome.textContent = `Income is Rs ${income}`;
  displayBalance.textContent = `Balance is Rs ${income}`;
});

// expense -eventListener
expenseForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const expense = {
    description: expenseDesc.value,
    amount: parseInt(expenseAmount.value),
    category: expenseCategory.value,
  };
  expenses.push(expense);
  expenseDesc.value = "";
  expenseAmount.value = "";
  expenseCategory.value = "Food";
  updateBalance();
});

// Budget Summary

const updateBalance = () => {
  const totalExpenses = expenses.reduce(
    (sum, expense) => sum + expense.amount,
    0
  );
  const balance = income - totalExpenses;
  expenseList.innerHTML = "";
  expenses.forEach((expense) => {
    const row = document.createElement("tr");

    row.innerHTML = `
                <td>${expense.description}</td>
                <td>$${expense.amount.toFixed(2)}</td>
                <td>${expense.category}</td>`;
    expenseList.appendChild(row);
  });
  displayBalance.textContent = `Balance is ${balance}`;
};
