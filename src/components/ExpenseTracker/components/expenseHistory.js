import React, {useContext} from 'react';
import {TransactionApi} from "../transactionContext/transContext";

function ExpenseHistory() {
    // let transactions = [
    //     {amount: 500, desc: 'Cash'},
    //     {amount: -40, desc: 'Oil'},
    //     {amount: -200, desc: 'Bil'},
    // ];
    const transaction = useContext(TransactionApi);
    console.log(transaction.transactions);
    const {transactions} = transaction
    return (
        <div className="">
            <h2>History</h2>
            <hr/>
            <ul className="transaction-list">
                {
                    transactions.map((item, index) =>{
                        return  <li key={index}>
                            <span>{item.desc}</span>
                            <span>${item.amount}</span>
                        </li>
                    })
                }
            </ul>
        </div>
    );
}

export default ExpenseHistory;
