import React, {Component} from 'react';
import Balance from "./balance";
import ExpenseContainer from "./expenseContainer";
import ExpenseHistory from "./expenseHistory";
import ExpenseNewTransaction from "./expenseNewTransaction";

class Index extends Component {
    render() {
        return (
                <div className="container">
                    <h1 className="txt-center">Expense Tracker</h1>
                    <Balance/>
                    <ExpenseContainer/>
                    <ExpenseHistory/>
                    <ExpenseNewTransaction/>
                </div>
        );
    }
}

export default Index;
