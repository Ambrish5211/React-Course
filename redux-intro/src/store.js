import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import accountReducer from "./features/accounts/accountSlice";
import customerReducer from "./features/customer/customerSlice";

const rootReducer = combineReducers({
  accountStore: accountReducer,
  customerStore: customerReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
