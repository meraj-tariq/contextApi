import React, {useContext} from 'react';
import {TransactionApi} from "../transactionContext/transContext";

function Balance() {
    const transaction = useContext(TransactionApi);

   const getBalance = () =>{
       let income = 0;
       let expense = 0;
       let balance = 0;
       transaction.transactions.forEach((x)=>{
           if(x.amount < 0){
               expense = expense + x.amount
           }else{
               income = income + x.amount;
           }
       });
       balance = income + expense;
       return balance
    }
    return (
            <div className="">
                <h2>Your Balance <br/> ${getBalance()}</h2>
            </div>
        );
}

export default Balance;
