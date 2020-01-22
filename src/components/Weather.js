import React, { useState, useEffect } from "react"
import axios from "axios"

const Weather = () => {
  const [data, setData] = useState({ main: {}, weather: [], wind: {} })

  useEffect(() => {
    const fetchData = async () => {
      try {
      const result = await axios("https://api.openweathermap.org/data/2.5/weather?q=Helsinki&appid=5be1f3d75d33ded748aed9cb40b44894")
      setData(result.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])

  const { weather, wind: { speed }, main: { temp }} = data
  console.log(data.main)
  return (
    <>
      {weather.map(item => 
        <div key={item.id}>
        <p>{item.main}</p>
        <p>{item.description}</p>
        </div>
      )}
      <span>Temperature: {Math.floor(temp-273.15)} degree Celsius</span>
      <span>Wind speed: {speed}</span>
    </>
  )
}

export default Weather