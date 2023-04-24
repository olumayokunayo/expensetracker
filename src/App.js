import React, { useState } from "react";
import ExpenseItem from "./components/Expenses/ExpenseItem";
// import expenses from "./components/Expenses/ExpenseLists";
import Expense from "./components/Expenses/Expense";
import NewExpense from "./components/New Expense/NewExpense";
import './App.css'

const dummyExpenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(dummyExpenses);
  
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses)=> {
      return [expense, ...prevExpenses]
    })
  };

  return (
    <div className="expenseApp">
      <h2>€xpen$€ Tracker</h2>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expense expenses={expenses} />
    </div>
  );
}

export default App;
