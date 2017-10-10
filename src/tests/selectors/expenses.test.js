import { selectExpenses } from '../../selectors/expenses';

const expenses = [
    {
        id: 1,
        description: 'Gum',
        note: '',
        amount: 195,
        createdAt: -1000,
    },
    {
        id: 2,
        description: 'Rent',
        note: '',
        amount: 109533,
        createdAt: 0,
    },
    {
        id: 3,
        description: 'Credit card',
        note: '',
        amount: 4500,
        createdAt: 1000,
    },
];

test('Should filter by text value', () => {
    const filters = {
        text: 'e',
        sortBy: 'date',
        startDate: null,
        endDate: null,
    };
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[2], expenses[1]]);
});