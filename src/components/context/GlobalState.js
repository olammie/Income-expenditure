import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

//Initial state
const initialstate = {
    transactions: []
}


//Create Context
export const GlobalContext = createContext(initialstate);
// In other for other components to have access to our GlobalState, we need to have a provider(i.e we need to wrap all the components inside the App.js in a provider component)

// Provider Component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialstate); //Whenever we want to call a reducer action, we need to use (dispatch)

    //Actions
    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }

    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    }

    return(<GlobalContext.Provider value={{
        //The way we can access anything from the initialstate is by saying(state.anything we want to get)
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
    }}>
        { children }
    </GlobalContext.Provider>)
}