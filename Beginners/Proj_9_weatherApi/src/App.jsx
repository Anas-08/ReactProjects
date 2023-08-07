import './App.css'
import React, { useState } from 'react'

const api = {
  key:"6d37c42e6f1c97f9e1ae2cce17c95033",
  base:"https://api.openweathermap.org/data/2.5/",
}
export default function 
() {

  const [query, setQuery] = useState('')
  const [weather, setWeather] = useState({})
  
  const search = (e) =>{
    // console.log(e)
    if(e.key === "Enter"){
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result)=> {
        console.log(result)
        setWeather(result)
        setQuery('')
      })
    }
  }

  const dateBuilder = (d) =>{
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday","Thursday", "Friday","Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`    
  }
  
  return (
    <main>

    <div className="searchBar">

      <input type="text"
      className='search-bar'
      placeholder='Search...'
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      onKeyPress={search}
      />
      
    </div>
    {(typeof weather.main != "undefined")?
    (
      <div className="location-box">
      <div className="location">
        <div className='country-name'>{weather.name}, {weather.sys?.country} </div>
        <div className='date'>{dateBuilder(new Date())}</div> 
      </div>
      <div className="weather-box">
        {Math.round(weather.main.temp) } ° C
      </div>
      <div className="weather-type">
        {weather.weather[0].main}
      </div>

  </div>
    ):(' ')
  }
    

    </main>
   
  )
}
