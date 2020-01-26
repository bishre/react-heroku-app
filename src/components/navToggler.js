import React, { useState, useContext } from "react"
import styled from "styled-components"
import { UIContext } from "../context/uiContext"

const StyledDiv = styled.div`
  display: block;
  position: absolute;
  right: 0;
  padding: 5px;
  span {
    position: relative;
    display: block;
    width: 20px;
    height: 2px;
    margin-bottom: 5px;
    background-color: black;
  }

  &.open span:nth-child(1) {
    top: 5px;
    transform: rotate(45deg)
  }

  &.open span:nth-child(2) {
    opacity: 0
  }

  &.open span:nth-child(3) {
    top: -9px;
    transform: rotate(-45deg)
  }
`

const NavToggler = () => {
  const { isMobileMenuOpen, toggleMenu } = useContext(UIContext)
  return (
    <StyledDiv onClick={toggleMenu} className={isMobileMenuOpen ? "open" : ""}>
      <span></span>
      <span></span>
      <span></span>
    </StyledDiv>
  )
}

export default NavToggler