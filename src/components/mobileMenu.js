import React, { useContext } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { CSSTransition } from "react-transition-group"

import { UIContext } from "../context/uiContext"

const StyledDiv = styled.div`
  position: absolute;
  top: 30px;
  left: 0;
  width: 100%;
  height: 100%;
  background: #333;
  padding: 50px 20px;
  z-index: 100;
  transform: translateY(-100vh);
  transition: transform 0.4s ease-in-out;
  
  &.enter-active, &.enter-done {
    transform: translateY(0);
  }

  &.exit-active {
    transform: translateY(-100vh);
  }

  a {
    padding-bottom: 18px;
  }
`

const MobileMenu = () => {
  const { isMobileMenuOpen, toggleMenu } = useContext(UIContext)
  return (
    <CSSTransition in={isMobileMenuOpen} timeout={400} unmountOnExit>
      <StyledDiv>
        <Link to="news" onClick={toggleMenu}>News</Link>
        <Link to="jobs" onClick={toggleMenu}>Jobs</Link>
        <Link to="weather" onClick={toggleMenu}>Weather</Link>
        <Link to="posts" onClick={toggleMenu}>Posts</Link>
      </StyledDiv>
    </CSSTransition>
  )
}

export default MobileMenu