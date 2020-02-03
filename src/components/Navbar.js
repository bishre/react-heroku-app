import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import NavToggler from "./navToggler"
import MobileMenu from "./mobileMenu"

const StyledDiv = styled.div`
  display: flex;
  width: 100%;
  overflow: hidden;
  background: #333;
  height: 50px;
  z-index: 100;

  a {
    display: block;
    text-align: center;
    text-decoration: none;
    color: white;
    padding: 14px 16px;

    &:hover {
      background-color: #ddd;
      color: #333;
    }
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
        {/* <Link to="posts">Posts</Link> */}
      </StyledDiv>
    )}
    </>
  )
}

export default Navbar