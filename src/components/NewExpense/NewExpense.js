import React from "react";
import ExpenceForm from "./ExpenceForm";
import "./NewExpense.css";

const NewExpense = (prop) => {
  const saveExpenseDateHandler = (enteredExpenseDate) => {
    const expenseDate = {
      ...enteredExpenseDate,
      id: Math.random().toString(),
    };

    prop.onAddExpens(expenseDate);
  };
  return (
    <div className="new-expense">
      <ExpenceForm onSaveExpenseDate={saveExpenseDateHandler} />
    </div>
  );
};

export default NewExpense;
