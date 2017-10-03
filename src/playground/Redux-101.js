import { createStore } from 'redux';

const incrementCount = ({ incrementBy = 0 } = {}) => ({
    type: 'INCREMENT',
    incrementBy,
});

const decrementCount = ({ decrementBy = 0 } = {}) => ({
    type: 'DECREMENT',
    decrementBy,
});

const setCount = ({ count = 0 } = { count: 0 }) =>({ 
    type: 'SET',
    count,
 });

 const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT': {
            const { incrementBy } = action;
            return {
                count: state.count + incrementBy,
            };
        }
        case 'DECREMENT': {
            const { decrementBy } = action;
            return { count: state.count - decrementBy };
        }
        case 'SET': {
            const { count } = action;
            return { count };
        }
        default:
            return state;
    }
};

const store = createStore(countReducer);

console.log(store.getState());

const unsubscribe = store.subscribe(() => {
    console.log('unsubscibe');
});
// Action - an option that gets sent to the store
store.dispatch(incrementCount({ incrementBy: 5 }));
console.log(store.getState());

store.dispatch(decrementCount({ decrementBy: 3 }));
console.log(store.getState());

store.dispatch(setCount({ count: 9 }));
console.log(store.getState());


// store.dispatch(incrementCount({}));
// console.log(store.getState());

// store.dispatch(decrementCount({ decrementBy: 3 }));
// console.log(store.getState());

