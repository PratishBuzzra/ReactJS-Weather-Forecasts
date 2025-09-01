import React from 'react'
import { useContext } from 'react'
import { WeatherContext } from '../context/WeatherContext'

const SearchWeather = () => {
    const {city, setCity, fetchWeather} = useContext(WeatherContext)
  return (
    <div className='flex items-center justify-center gap-2'>
        <input className='border rounded shadow px-2 py-2 w-[80vh]' type="text" placeholder='Enter City' value={city} onChange={(e)=>setCity(e.target.value)} />
        <button className='bg-[#1A1A1A] text-white px-2 py-2 rounded shadow' onClick={fetchWeather}>Get Weather</button>
    </div>
  )
}

export default SearchWeather
