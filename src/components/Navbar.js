import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import NavToggler from "./navToggler"
import MobileMenu from "./mobileMenu"

const StyledDiv = styled.div`
  display: flex;
  width: 100%;
  padding: 5px 50px;
  justify-content: space-between;
  background: lightblue;
  height: 30px;
  z-index: 100;

  a {
    display: block;
    text-align: center;
    text-decoration: none;
    color: black;
  }

  &.mobile-navbar {
    display: none;
  }
  .mobile-nav__toggler {
    display: ${props => props.isMobile ? "block" : "none"}
  }
`

const Navbar = props => {
  const { isMobile } = props
  return (
    <>
    {isMobile ? (
    <StyledDiv>
      <NavToggler />
      <MobileMenu/>
    </StyledDiv>
    ) : (
      <StyledDiv className={isMobile ? "mobile-navbar" : ""}>
        <Link to="news">News</Link>
        <Link to="jobs">Jobs</Link>
        <Link to="weather">Weather</Link>
      </StyledDiv>
    )}
    </>
  )
}

export default Navbar