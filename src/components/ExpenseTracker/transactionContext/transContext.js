import React, {createContext, useReducer} from 'react';
import TransactionReducer from "./transReducer";
const initialTransactions =[
    {amount: 500, desc: 'Cash'},
    {amount: -100, desc: 'Oil'},
    {amount: -200, desc: 'Bill'},
]

export const TransactionApi = createContext(initialTransactions);

export const TransactionProvider = ({children}) =>{
    let [state, dispatch] = useReducer(TransactionReducer, initialTransactions);

    function addTransaction(transObj){
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: {
                amount: transObj.amount,
                desc: transObj.desc,
            },
        })
    }
    return(
        <TransactionApi.Provider value={{
            transactions: state,
            addTransaction: addTransaction
        }}>
            {children}
        </TransactionApi.Provider>
    )
}
