import React from 'react'
import { useContext } from 'react'
import { WeatherContext } from '../context/WeatherContext'
import WeatherIcon from './WeatherIcon'

const CurrentWeather = () => {

    const {loading, error, weatherData} = useContext(WeatherContext)
    const date = new Date()
    const options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long'
    }
    const formattedDate = date.toLocaleDateString('en-US', options)
  return (
    <div>
       {loading && (
  <div className="flex justify-center items-center py-10">
    <div className="w-8 h-8 border-4 border-black border-t-transparent rounded-full animate-spin"></div>
    <span className="ml-3 text-black text-lg">Loading...</span>
  </div>
)}
        {error && <p>{error}</p>}

        {weatherData && (
            <div className='bg-[#1A1A1A] text-white w-full max-w-3xl mx-auto rounded-lg shadow px-6 pt-4 pb-8'>
                <div className='flex justify-between items-center '>
                    <div className='flex flex-col justify-center leading-5'>
                         <h1 className='text-4xl font-bold'>{weatherData.name}</h1>
                <p className='text-[15px] font-semibold'>{formattedDate}</p>
                    </div>
                    <div className='flex flex-col items-center justify-center leading-1'>
                         <WeatherIcon iconCode={weatherData.weather[0].icon}/>
                          <p>{weatherData.weather[0].description}</p>

                    </div>

                </div>
               
             <div className="flex justify-between items-center text-white">
  
  <h1 className="text-6xl font-extrabold">{weatherData.main.temp}°C</h1>


  <div className="flex flex-col leading-5 w-60  mt-9 ">
    <h3 className="text-lg text-left font-bold mb-1">Details:</h3>

    <div className="flex justify-between ">
      <span className="font-semibold">Feels Like:</span>
      <span>{weatherData.main.feels_like}°C</span>
    </div>
    <div className="flex justify-between ">
      <span className="font-semibold">Humidity:</span>
      <span>{weatherData.main.humidity}%</span>
    </div>
    <div className="flex justify-between ">
      <span className="font-semibold">Pressure:</span>
      <span>{weatherData.main.pressure} hPa</span>
    </div>
    <div className="flex justify-between">
      <span className="font-semibold">Wind:</span>
      <span>{weatherData.wind.speed} m/s</span>
    </div>
  </div>
</div>

            </div>
        )}
      
    </div>
  )
}

export default CurrentWeather
