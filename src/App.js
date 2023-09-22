import logo from "./logo.svg";
import "./App.css";
import ExpenseItem from "./components/Expenses/ExpenseItem";

import { useState } from "react";

import NewExpense from "./components/NewExpense/NewExpense";

export default ()=> {
  const expenses = [
    {
      title: "Petrol",
      amount: 198.4,
      date: new Date(),
    },
    {
      title: "Groceries",
      amount: 75.0,
      date: new Date("2023-05-15"),
    },
    // Add more expense items as needed
  ];
  
  
  function expenseCreator(expense,keyId){
    const expense_id = `expense_${keyId}`;
    
    const expenseItem = (
      <ExpenseItem
        key={keyId}
        amount={expense.amount}
        title={expense.title}
        date={expense.date}
        functionName={deleteExpense}
        id={expense_id}
      />
    );
    
    function deleteExpense() {
      const divCont = document.getElementById("list-expense");
      const childCont = document.getElementById(expense_id);
      divCont.removeChild(childCont);
    }
    return expenseItem
  }
  const expenseTempList=expenses.map((expense,keyId)=>{
    
    return expenseCreator(expense,keyId)
  })
  const [expenseList, setNewExpense] = useState(expenseTempList);
  //console.log(expenseList)
 
  
  return (
    <div>
      <NewExpense/>
      <div id="list-expense" className="App">
        {expenseList}
      </div>
    </div>
  );
}



