import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
  // const [title, setTitle] = useState(props.title);
  // // console.log(props);

  // const titleChangeHandler = () => {
  //   setTitle('Updated')
  //   // console.log("title");

  // };


  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      {/* <button onClick={titleChangeHandler}>Change Title</button> */}
    </div>
  );
};

export default ExpenseItem;
