import React, { useState } from "react"
import styled from "styled-components"

const StyledLi = styled.li`
  .job-description {
    display: ${props => props.open ? "block" : "none"};

    p {
      margin: 0;
    }
  }
`

const Job = props => {
  const [openDetails, setOpenDetails] = useState(false)
  const { job } = props

  const toggleOpen = () => {
    setOpenDetails(!openDetails)
  }
  console.log(openDetails)
  return (
    <StyledLi open={openDetails}>
      <h3 className="job-title" onClick={toggleOpen}>{job.tyotehtava}</h3>
      <div className="job-description">
        <p>Organisaatio: {job.organisaatio}</p>
        <p>Ammattiala: {job.ammattiala}</p>
        <p>Osoite: {job.osoite}</p>
        <span>Linkki: <a href={job.linkki} target="_blank">{job.linkki}</a></span>
      </div>
    </StyledLi>
  )
}

export default Job