import logo from "./logo.svg";
import "./App.css";
import ExpenseItem from "./components/Expenses/ExpenseItem";

export default ()=> {
  const expenses = [
    {
      title: "Petrol",
      amount: 198.4,
      date: new Date(),
      location: "Gorakhpur",
    },
    {
      title: "Groceries",
      amount: 75.0,
      date: new Date("2023-05-15"),
      location: "Supermarket",
    },
    // Add more expense items as needed
  ];
  
  const expenseList=expenses.map((expense,keyId)=>{
    const expense_id=`expense_${keyId}`
    const expenseItem= <ExpenseItem
      key={keyId}
      amount={expense.amount}
      title={expense.title}
      date={expense.date}
      location={expense.location}
      functionName={deleteExpense}
      id={expense_id}
    />;
    function deleteExpense(){
      const divCont=document.getElementById('list-expense')
      const childCont=document.getElementById(expense_id)
      divCont.removeChild(childCont)
    }
    return expenseItem
  })
  //console.log(expenseList)

  return (
    <div id='list-expense' className="App">
      
        {expenseList}
      
    </div>
  );
}



