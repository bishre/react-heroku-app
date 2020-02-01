import React, { useState, useEffect } from "react"
import axios from "axios"
import styled from "styled-components"
import NewsCard from "./NewsCard"

const StyledDiv = styled.div`
  display: block;
  max-width: 100%;
  text-align: center;
  ul {
    display: flex;
    flex-flow: row wrap;
    padding: 50px 0 100px;
  }
`
const News = () => {
  const [data, setData] = useState({ articles: []})
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    const fetchData = async () => {
      let url = 'https://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'apiKey=2b257cdf62894fcaa0a0fb27f9b1346b';
      try {
      const result = await axios(url)
      setData(result.data)
      console.log(result.data)
      } catch (error){
        console.log(error)
      }
      setIsLoading(false)
    }
    fetchData()
  }, [])

  return (
    <StyledDiv>
      <h2>Headlines</h2>
      {isLoading ? 
      <span>Loading...</span> 
      :
      <ul>
        {data.articles.map(item => {
          return (
            <NewsCard item={item}/>
          )
        })}
      </ul>}
    </StyledDiv>
  )
}

export default News