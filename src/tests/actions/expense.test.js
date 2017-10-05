import { addExpense, removeExpense, editExpense } from '../../actions/expense';

test('Should setup remove expense action object', () => {
    const action = removeExpense({ id: '123abc' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc',
    });
});

test('Should setup edit expense action object', () => {
    const action = editExpense('123abc', {amount: 100, createdAt: 1000 });
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {
            amount: 100,
            createdAt: 1000,
        },
    });
});
