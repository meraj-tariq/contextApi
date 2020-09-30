import React, {useContext} from 'react';
import {TransactionApi} from "../transactionContext/transContext";

function ExpenseContainer(){
    const transaction = useContext(TransactionApi);

    const getExpense = () =>{
        let expense = 0;
        transaction.transactions.forEach((x)=>{
            if(x.amount < 0 ){
                expense += x.amount;
            }
        })
        return expense
    }

   const getIncome = ()=>{
        let income = 0;
       transaction.transactions.forEach((x)=>{
           if(x.amount > 0 ){
               income = income + x.amount;
           }
       })
       return income
   }
        return (
            <div className="expense-container">
               <h3>INCOME <br/> ${getIncome()}</h3>
               <h3>EXPENSE <br/> ${getExpense()}</h3>
            </div>
        );
}

export default ExpenseContainer;
