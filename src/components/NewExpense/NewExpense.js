
import './NewExpense.css'

import ExpenseForm from './ExpenseForm'

export default props=>{

    function saveDataHandler(obj){
        const expenseData={
            ...obj,
            id:Math.random().toString()
        }

        props.onAddExpense(expenseData)

    }

    return <div className='new-expense'>
        <ExpenseForm onSaveData={saveDataHandler}/>
    </div>
}