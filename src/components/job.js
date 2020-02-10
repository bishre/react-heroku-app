import React, { useState, useEffect, useRef } from "react"
import styled from "styled-components"

const StyledLi = styled.li`
  .job-description {
    overflow: hidden;
    /* display: ${props => props.open ? "block" : "none"}; */
    transition: height 0.4s ease-in-out;

    p {
      margin: 0;
    }
  }
`

const Job = props => {
  const elem = useRef(null)
  const [openDetails, setOpenDetails] = useState(false)
  const [elemHeight, setElemHeight] = useState(0)
  const { job } = props

  useEffect(() => {
    setElemHeight(elem.current.scrollHeight)
  }, [])

  const toggleOpen = () => {
    setOpenDetails(!openDetails)
  }
  console.log(openDetails)
  const height = openDetails ? elemHeight : 0
  return (
    <StyledLi>
      <h3 className="job-title" onClick={toggleOpen}>{job.tyotehtava}</h3>
      <div className="job-description" ref={elem} style={{ height }}>
        <p>Organisaatio: {job.organisaatio}</p>
        <p>Ammattiala: {job.ammattiala}</p>
        <p>Osoite: {job.osoite}</p>
        <span>Linkki: <a href={job.linkki} target="_blank">{job.linkki}</a></span>
      </div>
    </StyledLi>
  )
}

export default Job