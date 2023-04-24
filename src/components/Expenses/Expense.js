import React from 'react'
import ExpenseItem from './ExpenseItem'

const Expense = (props) => {
    const expenses = props.expenses
    // console.log(expenses);
    // console.log(props);
    const expenseItems = expenses.map((expense)=> 
    <ExpenseItem 
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
    />
    )
    
  return (
    <div>
       {expenseItems}
    </div>
  )
}

export default Expense