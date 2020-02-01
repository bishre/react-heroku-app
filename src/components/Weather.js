import React, { useState, useEffect } from "react"
import axios from "axios"
import styled from "styled-components"

const StyledDiv = styled.div`
overflow: hidden;
  .temperature {
    position: absolute;
    left: 50%;
    transform: translate(-50%, 50%);
    padding: 0;
    margin: 0;
    font-size: 50px;
    text-align: center;
    z-index: 10;
  }

  .wind-speed {
    text-align: center;
    position: absolute;
    top: 25%;
    left: 50%;
    transform: translate(-50%, 40%);
    z-index: 10;
  }

  .weather-background__image {
    display: block;
    max-width: 100vw;
    min-height: 100vh;
    object-fit: cover;
    z-index: 0;

    img {
      width: 100%;
      height: 100%;
    }
  }
  .weather-background__image::before {
      position: relative;
      display: block;
      content: "";
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
    }
`

const Weather = () => {
  const [data, setData] = useState({ main: {}, weather: [], wind: {} })
  const [url, setUrl] = useState(null)

  useEffect(() => {
    const fetchUrl = async (word) => {
      const keyword = word.toLowerCase()
      try {
        const result = await axios(`https://source.unsplash.com/900x1600/?${keyword}`)
        setUrl(result.config.url)
      } catch (error) {
        console.log(error)
      }
    }
    const fetchData = async () => {
      try {
      const result = await axios("https://api.openweathermap.org/data/2.5/weather?q=Helsinki&appid=5be1f3d75d33ded748aed9cb40b44894")
      setData(result.data)
      fetchUrl(result.data.weather[0].description)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])

  const { weather, wind: { speed }, main: { temp }} = data
  return (
    <StyledDiv>
      <h3 className="temperature">{Math.floor(temp-273.15)}&deg;C</h3>
      <p className="wind-speed">{speed}m/s</p>
      <div className="weather-background__image">
        <img src={url} alt="weather"/>
      </div>
    </StyledDiv>
  )
}

export default Weather