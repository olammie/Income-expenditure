// A reducer is how we specify the application state changes in response to certain actions to our context

export default(state, action) => {
    switch(action.type) {
        case 'DELETE_TRANSACTION':
            return{
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
            }
        case 'ADD_TRANSACTION':
            return {
                ...state,
                transactions: [
                    action.payload, ...state.transactions
                ]
            }
        default:
            return state;
    }
}