import React, { useState } from "react";
import "./ExpenceForm.css";

const ExpenceForm = (prop) => {
  const [enteredTitle, setEnterTitle] = useState("");
  const [enteredAmount, setEnterAmount] = useState("");
  const [enteredDate, setEnterDate] = useState("");
  //Funkcija titleChangeHandler se aktivira na promenu. titleChangeHandler zamenjuje eventLisener
  //Praksa je da se funkcije zavrsavaju sa Hendler, da bi smo znali da se odnose na eventLisener
  const titleChangeHandler = (event) => {
    setEnterTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setEnterAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnterDate(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();

    const expenseDate = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    prop.onSaveExpenseDate(expenseDate);
    setEnterDate("");
    setEnterTitle("");
    setEnterAmount("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenceForm;
