import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expense';

const CreatePage = (props) => (
    <div>
        <ExpenseForm
            onSubmit={(expese) => {
                props.dispatch(addExpense(expese));
                props.history.push('/');
            }}
        />
    </div>
);

export default connect()(CreatePage);
