import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Pricing from "./pages/Pricing";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";
import Product from "./pages/Product";
import Login from "./pages/Login";
import CityList from "./components/CityList"
import { useEffect, useState } from "react";
import CountryList from "./components/CountryList";

const BASE_URL = "http://localhost:9000"

export default function App() {
  const [cities, setCities]= useState([])
  const [isLoading, setIsLoading]= useState(false)

 useEffect(function () {
    async function fetchCities() {
     try {
      setIsLoading(true)
      const res = await fetch(`${BASE_URL}/cities`)
      const data = await res.json();
      // console.log(data) 
      setCities(data);
    
     } catch (error) {
        alert("There was an error loading data..")
     } finally {
      setIsLoading(false)
     }
    }
    fetchCities()
    console.log(cities)
  }, []);

  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="product" element={<Product/>} />
        <Route path="pricing" element={<Pricing/>} />
        <Route path="login" element={<Login/>} />
        
        <Route path="app" element={<AppLayout/>} >
          <Route index element={<CityList cities={cities} isLoading={isLoading} />}  />
          <Route path="cities" element={<CityList cities={cities} isLoading={isLoading} />}  />
          <Route path="countries" element={<CountryList cities={cities} isLoading={isLoading} />} />
          <Route path="form" element={<p>Form</p>} />
        <Route path="*" element={<PageNotFound/>} />

        </Route>
      </Routes>
    </BrowserRouter>
  )
}
