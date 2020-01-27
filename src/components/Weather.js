import React, { useState, useEffect } from "react"
import axios from "axios"
import styled from "styled-components"

const StyledDiv = styled.div`
  .temperature {
    font-size: 50px;
    text-align: center;
  }

  .wind-speed {
    text-align: center;
  }
`

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
  console.log(weather[0])
  return (
    <StyledDiv>
        <h2 className="description" key={weather.id}>
          {weather.description}
        </h2>
      <h3 className="temperature">{Math.floor(temp-273.15)}&deg;C</h3>
      <p className="wind-speed">{speed}m/s</p>
    </StyledDiv>
  )
}

export default Weather