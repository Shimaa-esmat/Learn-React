import {configureStore } from '@reduxjs/toolkit';
import counterSlice from './counter-slice';
import authSlice from './auth-slice';


// const counterReducer = (state = initValue,  action) => {
// if(action.type === 'increase'){
//     return {
//         counter: state.counter + action.amount,
//         showCounter: state.showCounter
//     }}
//     if(action.type === 'decrement'){
//         return {
//             counter: state.counter - 1,
//             showCounter: state.showCounter
//         }}
//         if(action.type === 'toggle'){
//             return {
//                 counter: state.counter ,
//                 showCounter: !state.showCounter
//             }}
//         return state
// }



const store = configureStore({
    reducer: {counter: counterSlice, auth: authSlice}
    
});




export default store;
