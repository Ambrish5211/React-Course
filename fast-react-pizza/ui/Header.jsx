import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

export default function Header() {
  return (
    <div>
     <Link to="/" >Fast React Pizza Co.</Link>
     <SearchOrder />
     
    <p>AMbrish</p>
    </div>
     )

}
