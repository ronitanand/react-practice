import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [enteredTitle, setNewTitle] = useState("");
  const [enteredAmount, setNewAmount] = useState("");
  const [entereddDate, setNewDate] = useState("");

  const titleChangeHandler = (event) => {
    setNewTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setNewAmount(event.target.value);
  };

  const dateChangeHandler=(event)=>{
    setNewDate(event.target.value);

    
  }


  //   const [userInput,setUserInput]= useState({
  //       enteredTitle:'',
  //       enteredAmount:'',
  //       enteredDate:''
  //   })

  // const titleChangeHandler = (event) => {
  //   setUserInput({
  //       ...userInput,
  //       enteredTitle:event.target.value
  //   })
  // };

  // const amountChangeHandler = (event) => {
  //   setUserInput({
  //       ...userInput,
  //       enteredAmount:event.target.value
  //   })
  // };

  // const dateChangeHandler = (event) => {
  //   setUserInput({
  //       ...userInput,
  //       enteredDate:event.target.value
  //   })
  // };

  const submitHandler=(event)=>{
    event.preventDefault();
    const expenseData={
      title:enteredTitle,
      amount:enteredAmount,
      date:new Date(entereddDate)
    }

    props.onSaveExpenseData(expenseData);
    setNewAmount('')
    setNewTitle('')
    setNewDate('')

  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={titleChangeHandler}></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            value={enteredAmount}
            type="number"
            onChange={amountChangeHandler}
            min="0.01"
            step="0.01"
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            value={entereddDate}
            type="date"
            onChange={dateChangeHandler}
            min="2019-01-01"
            max="2022-12-31"
          ></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit" >Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
