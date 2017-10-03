import React from 'react';
import { connect } from 'react-redux';  // used connect this component with redux store
import ExpenseListItem from './ExpenseListItem';
import selectedExpenses from '../selectors/expenses';

const ExpenseList = (props) => {
    return (
        <div>
            <h1>This is expense list</h1>
            {props.expenses.map((expense, index) => {
                return <ExpenseListItem key={expense.id} {...expense} />
            })}
        </div>
    );
};

const mapStateToProps = (state) => {
    return ({
        expenses: selectedExpenses(state.expenses, state.filters)
    });
};

export default connect(mapStateToProps)(ExpenseList);
