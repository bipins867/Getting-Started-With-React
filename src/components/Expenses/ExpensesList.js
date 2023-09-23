import './ExpensesList.css'
import ExpenseItem from './ExpenseItem';

export default props=>{
    const yearExpense=props.expenses;


    const expenseList = yearExpense.map((expense) => {
      return (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      );
    });

    
    if(yearExpense.length===0){
        return <h2 className="expenses-list__fallback">No Expenses Found</h2>;
    }
    else if(yearExpense.length===1){
        return (
          <div>
            <ul className="expenses-list">{expenseList}</ul>
            <h3 className="expenses-list__fallback">
              Only single Expense here. Please add more...
            </h3>
          </div>
        );
    }   

    return <ul className='expenses-list'>{expenseList}</ul>;
}