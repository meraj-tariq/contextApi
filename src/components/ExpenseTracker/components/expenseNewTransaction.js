import React, {useContext, useState} from 'react';
import {TransactionApi} from "../transactionContext/transContext";

function ExpenseNewTransaction() {
    const {addTransaction} = useContext(TransactionApi);
    const [desc, setDesc] = useState('')
    const [newAmount, setNewAmount] = useState('')

    const handleAddition = (event) => {
        event.preventDefault();
        addTransaction({
            amount:Number(newAmount),
            desc: desc
        })
    }
    return (
        <div className="">
            <h2>Add new transaction</h2>
            <hr/>
            <form className="transaction-form" onSubmit={handleAddition}>
                <label>Text<br/>
                    <input type="text"
                           onChange={(e) => setDesc(e.target.value)}
                           placeholder="Enter description..." required={true}/></label><br/>
                <label>Amount<br/>
                    (negative - expense, positive -Income)
                    <input type="text" placeholder="Enter amount..."
                           onChange={(e) => setNewAmount(e.target.value)}
                           required={true}/></label>
                <br/>
                <input type="submit" value="Add Transaction"/>
            </form>
        </div>
    );
}

export default ExpenseNewTransaction;
