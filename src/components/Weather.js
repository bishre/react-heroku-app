import React, { useState, useEffect } from "react"
import axios from "axios"
import styled from "styled-components"

const StyledDiv = styled.div`
  max-width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 10px;
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
  
  return (
    <StyledDiv>
      {weather.map(item => 
        <span key={item.id}>
          Conditions: {item.description}
        </span>
      )}
      <span>Temperature: {Math.floor(temp-273.15)}&deg;C</span>
      <span>Wind speed: {speed}m/s</span>
    </StyledDiv>
  )
}

export default Weather