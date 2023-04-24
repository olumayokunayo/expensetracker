import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
 const submitHandler = (event) => {
    event.preventDefault();
    
    const expenseData = {
        title: enteredtitle,
        amount: enteredAmount,
        date: new Date(enteredDate)
    }
    console.log(expenseData);
    props.onSaveExpenseData(expenseData);

    setEnteredAmount('')
    setEnteredDate('')
    setEnteredTitle('')
 }
    const [enteredtitle, setEnteredTitle] = useState('')
  const inputChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const [enteredAmount, setEnteredAmount] = useState('')
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  
  const [enteredDate, setEnteredDate] = useState('')
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };


  return (
    <form onSubmit={submitHandler}>
      <div>
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={inputChangeHandler} value={enteredtitle}/>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" onChange={amountChangeHandler} min="0.01" step="0.01"  value={enteredAmount}/>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" onChange={dateChangeHandler}min="2019-01-01" step="2022-12-31" value={enteredDate}/>
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add €xpen$€</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
