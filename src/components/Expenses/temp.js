import React from "react";

function App() {
  return (
    React.createElement(ExpenseDate, { date: props.date }),
    React.createElement(
      "div",
      null,
      React.createElement("h1", null, "Expense 1"),
      React.createElement("h1", null, "Expense 2")
    )
  );
}
