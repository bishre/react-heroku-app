import React, { useState, useEffect } from "react"
import styled from "styled-components"
import axios from "axios"

const StyledDiv = styled.div`

`

const VantaaJobs = () => {
  const [jobs, setJobs] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      let url = "http://gis.vantaa.fi/rest/tyopaikat/v1/Opetusala"
      try {
        const result = await axios(url)
        console.log(result)
        setJobs(result.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])
  console.log(jobs)
  return (
    <StyledDiv>
      Jobs in city of Vantaa 
        <ul>
          {jobs && jobs.map(job => {
            return (
            <li>{job.tyotehtava}</li>
            )
          })}
        </ul>
    </StyledDiv>
  )
}

export default VantaaJobs