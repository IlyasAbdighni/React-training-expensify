import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

export const ExpenseListItem = ({ description, amount, createdAt, id }) => (
    <div>
        <Link to={`/edit/${id}`} >
        <h3>{ numeral(description).format('$0,0.00') }</h3>
        </Link>
        <p> { amount } - {moment(createdAt).format('MMMM Do, YYYY')} </p>
        
    </div>
);

export default ExpenseListItem;
