import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem(props) {

  
  //Funkcija clickHandler se aktivira na clik dugmeta. onClick zamenjuje eventLisener
  //Praksa je da se funkcije zavrsavaju sa Hendler, da bi smo znali da se odnose na eventLisener

  
  return (
    <Card className="expense-item ">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
