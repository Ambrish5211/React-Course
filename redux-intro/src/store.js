import { combineReducers, createStore } from "redux";
import accountReducer from "./features/accounts/accountSlice";
import customerReducer from "./features/customer/customerSlice";

const rootReducer = combineReducers({
  accountStore: accountReducer,
  customerStore: customerReducer,
});
const store = createStore(rootReducer);

export default store;

