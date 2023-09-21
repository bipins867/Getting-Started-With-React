import './ExpenseItem.css'
import React,{useState} from 'react';

export default (props) => {
  
  
  let expenseLocation = props.location;
  const [expenseTitle,setTitle]=useState(props.title);
  const [expenseAmount,setAmount]=useState(props.amount)
  //console.log("Main Function Called")

  function updateTitle(){
      setTitle('Updated Title')
      
      //console.log(expenseTitle)
    
  }
  function changeAmount(){
    setAmount(100)

  }
  return (
    <div className="expense-item__description">
      <h2>{expenseTitle}</h2>
      <h6>{expenseLocation}</h6>
      <div className="expense-item__price">${expenseAmount}</div>
      <button onClick={props.functionName}>Delete</button>
      <button onClick={updateTitle}>Change Title</button>
      <button onClick={changeAmount}>Change Amount</button>
    </div>
  );
};


