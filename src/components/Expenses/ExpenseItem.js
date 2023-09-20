import "./ExpenseItem.css";
import ExpenseDate from './ExpenseDate'
import ExpenseDetails from './ExpenseDetails'
import Card from '../UI/Card'

export default props=>{
  
 
  
  return (
    <Card id={props.id} className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetails
        amount={props.amount}
        location={props.location}
        title={props.title}
        functionName={props.functionName}
      />
    </Card>
  );
}


