import { createContext, useState, useEffect, useContext } from "react";

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

function useCities() {
  const context= useContext(CitiesContext);
  if(context === undefined)
     throw new Error("Cities Context was used outside the cities provider");
  return context;
}

export {CitiesProvider, useCities}