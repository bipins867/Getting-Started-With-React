import './ExpenseItem.css'
export default (props) => {
  const expenseTitle = props.title;
  const expenseAmount = props.amount;
  const expenseLocation = props.location;

  return (
    <div className="expense-item__description">
      <h2>{expenseTitle}</h2>
      <h6>{expenseLocation}</h6>
      <div className="expense-item__price">${expenseAmount}</div>
    </div>
  );
};


