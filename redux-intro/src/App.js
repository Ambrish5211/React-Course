import CreateCustomer from "./features/customer/CreateCustomer";
import Customer from "./features/customer/Customer";
import AccountOperations from "./features/accounts/AccountOperations";
import BalanceDisplay from "./features/accounts/BalanceDisplay";
import { useSelector } from "react-redux";

function App() {
  const fullName = useSelector((state) => state.customerStore.fullName)
  return (
    <div>
      <h1>🏦 The React-Redux Bank ⚛️</h1>
      {fullName === "" ? (<CreateCustomer />) : (
        <>
        <Customer />
        <AccountOperations />
        <BalanceDisplay />
        </>
      )}
      
      
    </div>
  );
}

export default App;
