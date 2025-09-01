import React from 'react'
import { useContext } from 'react'
import { WeatherContext } from '../context/WeatherContext'
import WeatherIcon from './WeatherIcon'

const ForecastFive = () => {
    const {forecast} = useContext(WeatherContext)
  return (
    <div className='w-full max-w-7xl mx-auto'>
       
        {
            
            forecast && (
              <div>
                <h1 className='text-3xl font-bold mb-5'>Weather Forecast (5 days)</h1>
                {forecast.map((day, index)=>(
                    
                    
                    <div key={index} className='flex justify-between items-center rounded-xl shadow bg-[#1A1A1A] mb-3 text-white px-8  '>
                        
                        
                        <div className='flex items-center gap-5 '>
                            <WeatherIcon iconCode={day.weather[0].icon}/>
                            <p>{day.date} <br />{day.day}</p>
                        </div>
                        <div>
                            <p>{day.main.temp}°C</p>
                            <p className='w-24 break-words'>{day.weather[0].description}</p>
                        </div>
                    </div>
                    
                ))}
                </div>
            )
        }
      
    </div>
  )
}

export default ForecastFive
