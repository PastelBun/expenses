import React from 'react'
import ExpenseItem from './ExpenseItem'
import './Expenses.css'
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter'

const Expenses=(props)=>{
    /*const expenses=props;*/
    const {expenses}=props;
    
    return(
        <Card className='expenses'>
            <ExpensesFilter/>
            <ExpenseItem
            expenseData={expenses[0]}
            />
            <ExpenseItem
            expenseData={ expenses[1]}
            />
        </Card>
    );
}

export default Expenses