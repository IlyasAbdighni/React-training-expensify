import selectExpenses from '../../selectors/expenses';
import expenses from '../fixtures/expenses';


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
