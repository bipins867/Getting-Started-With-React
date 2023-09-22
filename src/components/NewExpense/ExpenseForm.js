import { useInsertionEffect, useState } from "react";
import "./NewExpense.css";

export default (props) => {

  
   

  
  const [enteredTitle, updateTitle] = useState("");
  const [enteredAmount,updateAmount]=useState('');
  const [enteredDate,updateDate]=useState('');
  // const [userInput,setUserInput]=useState({
  //   enteredAmount:'',
  //   enteredDate:'',
  //   enteredTitle:''
  // })

  const onTitleChange=event=>{
    updateTitle(event.target.value)
    // setUserInput((prevState)=>{
    //  return  {...prevState,enteredTitle:event.target.value}
    // })
    
  }
  const onAmountChange=event=>{
    updateAmount(event.target.value)
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredAmount: event.target.value };
    // });
  }

  const onDateChange=event=>{
    updateDate(event.target.value)
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredDate: event.target.value };
    // });
  }
  
  function onFormSubmit(event){
    event.preventDefault();
   
    const obj={amount:enteredAmount,title:enteredTitle,date:new Date(enteredDate)}
    props.onSaveData(obj);
    updateTitle('')
    updateAmount('')
    updateDate('')
  }
  
  return (
    <form onSubmit={onFormSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={onTitleChange} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" value={enteredAmount} onChange={onAmountChange} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" value={enteredDate} onChange={onDateChange} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
