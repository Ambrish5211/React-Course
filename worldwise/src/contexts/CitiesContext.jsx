import { createContext, useState, useEffect } from "react";

const CitiesContext = createContext()

const BASE_URL = "http://localhost:9000"


function CitiesProvider({children}) {

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


  return (<CitiesContext.Provider value={
   { cities, isLoading }
  }>
    {children}
  </CitiesContext.Provider>
  )

}

export {CitiesProvider}