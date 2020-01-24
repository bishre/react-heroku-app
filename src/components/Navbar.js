import React from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <>
    <Link to="news">News</Link>
    <Link to="jobs">Jobs</Link>
    <Link to="weather">Weather</Link>
    </>
  )
}

export default Navbar