import React from 'react';
import ExpenseList from './expenseList';
import ExpenseListFilters from './ExpenseListFilters';

const ExpensDash = () => (
    <div>
        <ExpenseListFilters />
        <ExpenseList />
    </div>
);

export default ExpensDash;
