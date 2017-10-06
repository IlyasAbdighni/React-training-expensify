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

test('Should setup add expense action opject with params', () => {
    const expenseData = {
        description: 'This is a test',
        note: 'Nothing is better for me than writing some codes',
        amount: 12312,
        createdAt: 1000,
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String),
        },
    });
});

test('Should setup add expense action opject without params', () => {
    const expectData = {};
    const action = addExpense(expectData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            description: '',
            amount: 0,
            createdAt: 0,
            id: expect.any(String),
            note: '',
        }
    });
});
