import { combineReducers, createStore } from 'redux';

const initialStateAccount = {
  balance: 0,
  loan:0,
  loanPurpose: "",
};

const initialStateCustomer = {
  fullName: "",
  nationalID: "",
  createdAt: ""
}



function accountReducer(state= initialStateAccount, action) {
    switch (action.type) {
      case "account/deposit":
        return {...state, balance: state.balance + action.payload};
      
      case "account/withdraw":
        return {...state, balance: state.balance - action.payload}
      
      case "account/requestLoan":
          return {...state, loan : action.payload.amount, loanPurpose: action.payload.purpose, balance: state.balance + action.payload.amount}
    
      case "account/payLoan":
            return {...state, loan: 0, loanPurpose: '',balance: state.balance - state.loan}
      default:
         return state;
    }
}

function customerReducer(state=initialStateCustomer, action ){
  switch (action.type) {
    case "customer/createCustomer":
      return {...state, fullName: action.payload.fullName, nationalID: action.payload.nationalID, createdAt: action.payload.createdAt}
      
    case "custome/updateName" :
      return {...state, fullName: action.payload.fullName }  
  
    default:
      return state;
  }
}


function deposit(amount) {
   return {type: "account/deposit", payload: amount}
}

function withdraw(amount) {
   return {type: "account/withdraw", payload: amount}
}

function requestLoan(amount, purpose) {
  return {type: "account/requestLoan", payload: {amount: amount, purpose: purpose}}
}

function payLoan(){
  return {type: "account/payLoan"}
}

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



function createCustomer(fullName, nationalID){
  return {type: "customer/createCustomer", payload: {fullName: fullName, nationalID:nationalID, createdAt: new Date().toISOString()}}
}

function updateName(fullName) {
  return {type: "customer/updateName", payload: fullName}
}



store.dispatch(createCustomer("Ambrish Kumar", "addharcard"))
console.log(store.getState())