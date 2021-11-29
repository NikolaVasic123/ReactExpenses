import React, {useState} from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Car Insurance",
    amount: 296.5,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e2",
    title: "Toilet Paper",
    amount: 69.45,
    date: new Date(2020, 1, 1),
  },
  {
    id: "e3",
    title: "New TV",
    amount: 799.43,
    date: new Date(2021, 10, 12),
  },
  {
    id: "e4",
    title: "New Desk",
    amount: 450,
    date: new Date(2021, 6, 28),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expens) => {
   // setExpenses((prevExpenses) => {
    //  return [expens, ...prevExpenses];
    //});
    setExpenses([expens, ...expenses]);
  };
  return (
    <div>
      <NewExpense onAddExpens={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
