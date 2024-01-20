import { createStore } from 'redux';

const INITIAL_VALUE = {
    counter: 0,
    privacy:false
}
const counterReducer = (store = INITIAL_VALUE, action) => {

    let newstore = store;
    if (action.type === "INCREMENT") {
        newstore = {...store, counter: store.counter + 1}
    }
    else if (action.type === "DECREMENT") {
        newstore = { ...store,counter: store.counter - 1}
    }
    else if (action.type === "ADD") {
        newstore = {...store, counter: store.counter + Number(action.payload.num)}
    }
    else if (action.type === "SUBTRACT") {
        newstore = { ...store,counter: store.counter - Number(action.payload.num)}
    }
    else if(action.type=="PRIVACY_TOGGLE"){
      return{...store, privacy:!store.privacy}
    }
    console.log("Action recieved", action);
    return newstore;
}
const counterStore = createStore(counterReducer);
export default counterStore;
// const redux = require('redux');

