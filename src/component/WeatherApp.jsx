import React from 'react'
import { useState } from 'react'
import SearchWeather from './SearchWeather'
import CurrentWeather from './CurrentWeather'
import ForecastFive from './ForecastFive'

const WeatherApp = () => {
  
  return (
    <div>
        <h1 className='text-4xl text-center pt-5 pb-5 font-bold'>Weather App</h1>
      <div className='flex flex-col gap-6'>
        <SearchWeather />
        <CurrentWeather />
        <ForecastFive />
      </div>
    </div>
  )
}

export default WeatherApp
