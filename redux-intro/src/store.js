import { combineReducers, createStore } from 'redux';
import accountReducer, { deposit, payLoan, requestLoan, withdraw } from './features/accounts/accountSlice';
import customerReducer, { createCustomer } from './features/customer/customerSlice';














const rootReducer = combineReducers({
  accountStore: accountReducer,
  customerStore: customerReducer
})
const store = createStore(rootReducer)

store.dispatch(deposit(500))
store.dispatch(withdraw(200))
store.dispatch(requestLoan(1000, "Buy a star"))
store.dispatch(payLoan())
console.log(store.getState());







store.dispatch(createCustomer("Ambrish Kumar", "addharcard"))
console.log(store.getState())