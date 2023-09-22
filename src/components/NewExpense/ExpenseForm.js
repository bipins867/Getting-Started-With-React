import { useState } from "react";
import "./NewExpense.css";

export default (props) => {

  const [enteredTitle, updateTitle] = useState("");
  const [enteredAmount,updateAmount]=useState('');
  const [enteredDate,updateDate]=useState('');

  const onTitleChange=event=>{
    updateTitle(event.target.value)
  }
  const onAmountChange=event=>{
    updateAmount(event.target.value)
  }

  const onDateChange=event=>{
    updateDate(event.target.value)
  }
  
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={onTitleChange}/>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" onChange={onAmountChange}/>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" onChange={onDateChange}/>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
