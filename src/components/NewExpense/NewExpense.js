import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const addExpenseButton = (
    <button onClick={addExpenseFormHandler}>Add Expense</button>
  );

  const [formContent, setFormContent] = useState(addExpenseButton);


  function addExpenseFormHandler(event){
    setFormContent(<ExpenseForm cancelFormHandler={onCancelFormHandler}  onSaveExpenseData={saveExpenseDataHandler} />);
  }

  function onCancelFormHandler(){
    setFormContent(addExpenseButton)
  }
  
  //<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
  return <div className="new-expense">{formContent}</div>;
};

export default NewExpense;
