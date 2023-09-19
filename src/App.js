import logo from "./logo.svg";
import "./App.css";
import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      title: "Petrol",
      amount: 198.4,
      date: new Date().toISOString(),
      location: "Gorakhpur",
    },
    {
      title: "Groceries",
      amount: 75.0,
      date: new Date("2023-09-15").toISOString(),
      location: "Supermarket",
    },
    // Add more expense items as needed
  ];
  
  const expenseList=expenses.map((expense,keyId)=>{
    return <ExpenseItem
      key={keyId}
      amount={expense.amount}
      title={expense.title}
      date={expense.date}
      location={expense.location}
    />;
  })
  //console.log(expenseList)

  return (
    <div className="App">
      <header className="App-header">
        {expenseList}
      </header>
    </div>
  );
}

export default App;
