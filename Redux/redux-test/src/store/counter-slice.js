import { createSlice } from '@reduxjs/toolkit';

const initCounterState = {
    counter: 0,
    showCounter: true
};

const counterSlice = createSlice({
    name: 'counter',
    initialState: initCounterState, 
    reducers: { 
        increase(state, action) {
            state.counter = state.counter + action.payload; 
        },
        decrement(state) {
            state.counter--;
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter;
        }
    }
});

export const counterActions = counterSlice.actions

export default counterSlice.reducer