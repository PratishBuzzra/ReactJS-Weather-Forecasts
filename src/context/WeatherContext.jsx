import { useState } from "react";
import { createContext } from "react";


export const WeatherContext = createContext()

const WeatherProvider = ({children})=>{

    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState(null)
    const [forecast, setForecast] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

      const API_KEY = import.meta.env.VITE_API_KEY;
      console.log(API_KEY);
      
    const fetchWeather = async ()=>{
        if(!city){
            throw new Error ('Cannot find City')
        }
        setLoading(true)
        setError('')
        setCity('')
        try {
             const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
        if(!res.ok){
            throw new Error('Error fetching weather')
        }
        const data = await res.json()
        setWeatherData(data);

        const lat = data.coord.lat;
        const lon = data.coord.lon;

        const resForecast = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
        if(!resForecast.ok){
            throw new Error('error getting forcast')
        }
        const forecastData = await resForecast.json()

        const dailyData = []
        const seenDates = new Set()

        for(let item of forecastData.list){
            const date = item.dt_txt.split(' ')[0]
            if(!seenDates.has(date)){
                const dateObj = new Date(date)
                const dayName = dateObj.toLocaleDateString('en-US' ,{weekday: 'long'})
                dailyData.push({
                    ...item,
                    date: date,
                    day: dayName
                })
                seenDates.add(date);
            }
        }
        setForecast(dailyData.slice(0, 5))
        
    }   
         catch (error) {
            setError(error.message)
            setWeatherData(null)
            setForecast(null)
            
        }finally{
            setLoading(false)
        }
    }
       



    return (
        <WeatherContext.Provider value={{city, setCity, weatherData, setWeatherData, forecast, setForecast, loading, setLoading, error, setError, API_KEY, fetchWeather}}>
            {children}
        </WeatherContext.Provider>
    )

}

export default WeatherProvider