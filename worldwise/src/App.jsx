import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Pricing from "./pages/Pricing";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";
import Product from "./pages/Pricing";
import Login from "./pages/Login";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="product" element={<Product/>} />
        <Route path="pricing" element={<Pricing/>} />
        <Route path="login" element={<Login/>} />
        
        <Route path="*" element={<PageNotFound/>} />
        <Route path="app" element={<AppLayout/>} />
      </Routes>
    </BrowserRouter>
  )
}
