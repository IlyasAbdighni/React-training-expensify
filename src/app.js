// install -> import -> use
import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import { Provider } from 'react-redux';
import AppRouter from './routes/AppRouter';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css'

import configStroe from './store/store-config';
import { addExpense } from './actions/expense';
import { setTextFilter } from './actions/filters';
import getVisibleExpense from './selectors/expenses';

const store = configStroe();

store.dispatch(addExpense({ description: 'water bill', amount: 1, createdAt: -1000 }));
store.dispatch(addExpense({ description: 'Gas bill', amount: 2, createdAt: 2000 }));
store.dispatch(addExpense({ description: 'Rent', amount: 3, createdAt: 1000 }));

const state = store.getState();
const visibleExpenses = getVisibleExpense(state.expenses, state.filters);

const ReduxApp = (
    <Provider store={store} >
        <AppRouter />
    </Provider>
);

ReactDOM.render(ReduxApp, document.getElementById('app'));
