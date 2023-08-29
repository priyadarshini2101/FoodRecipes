import axios from 'axios';
import React, { useState } from 'react';
function Weather(){

const [city,setcity] = useState('')  
const [Result,setResult] = useState('')

const handledata = e=>{
    setcity(e.target.value)
}

const handlebutton = e=>{
    e.preventDefault();
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d885aa1d783fd13a55050afeef620fcb`)
  .then(response=>response.json())
  .then(data=>{
    const kelvin = data.main.temp;
    const celcius = Math.floor(kelvin - 273.15);
    setResult(`Temperature  at ${city} is  ${celcius} degree C`)
  })
  .catch(error=>console.log('error'))
  setcity("")
    
    console.log(city)
}
    return(
        <div className='card'>
            <div className='card-body'>
            <h3 className='card-title'>Weather App</h3>
            <form>
                <input type='text' name='city' value={city} onChange={handledata}/><br/><br/>

            </form>
            <button onClick={handlebutton}>Get Temperature</button>
        </div>
        <h3>{Result}</h3>
        </div>
       
    )
}

export default Weather;