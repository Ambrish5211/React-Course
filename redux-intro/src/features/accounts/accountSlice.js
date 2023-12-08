const initialStateAccount = {
  balance: 0,
  loan:0,
  loanPurpose: "",
};

export default function accountReducer(state= initialStateAccount, action) {
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

export function deposit(amount,currency) {
  if (currency === 'USD') 
  return {type: "account/deposit", payload: amount}

  return function (dispatch, getState) {
    const host = 'api.frankfurter.app';
    const data = fetch(`https://${host}/latest?amount=10&from=GBP&to=USD`)
    .then(resp => resp.json())
    console.log(data)
    const converted = data.rates.USD

    dispatch({type: "account/deposit", payload: converted})
  }
}

export function withdraw(amount) {
  return {type: "account/withdraw", payload: amount}
}

export function requestLoan(amount, purpose) {
 return {type: "account/requestLoan", payload: {amount: amount, purpose: purpose}}
}

export function payLoan(){
 return {type: "account/payLoan"}
}