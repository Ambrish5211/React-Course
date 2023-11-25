import React from 'react'
import styles from './Map.module.css'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'

export default function Map() {
   const [searchParam, setSearchParams] =useSearchParams();
   const navigate = useNavigate();
  return (

    
    <div className={styles.mapContainer} onClick={() => navigate("form")}>Map
    <p>{searchParam.get("lat")}</p>
    </div>
    
  )
}
