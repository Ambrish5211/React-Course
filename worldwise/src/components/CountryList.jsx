import React, { useContext } from 'react'
import styles from './CountryList.module.css'
import Spinner from './Spinner.jsx' 
import CountryItem from './CountryItem.jsx'
import Message from './Message.jsx'
import { useCities } from '../contexts/CitiesContext.jsx'

export default function CountryList({ cities, isLoading}) {

  const {cities, isLoading} = useCities();
  if(isLoading) return <Spinner />

  if (!cities.length) return <Message message={"Add your first city by clicking on the city"} />

  const countries = cities.reduce((arr, city) => {
    if(!arr.map((el) => el.country).includes(city.country))
    return [...arr, {country: city.country, emoji: city.emoji}];
    else 
    return arr;
  },[])

  return (
      <ul className={styles.countryList}>

        {countries.map((country) => (
          <CountryItem country={country} />
        ))}

      </ul>
    )
}
