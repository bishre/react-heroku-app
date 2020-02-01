import React, { useState, useEffect } from "react"
import styled from "styled-components"
import axios from "axios"
import Job from "./job"

const StyledDiv = styled.div`
  text-align: center;

  h2 {
    padding: 16px 8px;
  }

  ul {
    padding: 0;
  }

  li {
    list-style: none;
    padding-bottom: 10px;
  }
`

const VantaaJobs = () => {
  const [jobs, setJobs] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      let url = "http://gis.vantaa.fi/rest/tyopaikat/v1/Opetusala"
      try {
        const result = await axios(url)
        setJobs(result.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])

  return (
    <StyledDiv>
      <h2>Jobs in city of Vantaa</h2>
        <ul>
          {jobs && jobs.map(job => {
            return (
              <Job job={job} key={job.id}/>
            )
          })}
        </ul>
    </StyledDiv>
  )
}

export default VantaaJobs