import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import Facebook from "../icons/facebook"
import Twitter from "../icons/twitter"
import Linkedin from "../icons/linkedin"
import Logo from "../icons/logo"

const Wrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-between;
  bottom: 0;
  background-color: #333;
  width: 100vw;

  .nav-links {
    display: flex;
    flex-flow: column wrap;
    padding: 10px;
    a {
      margin-bottom: 5px;
      text-decoration: none;
      color: white;
      cursor: pointer;
    }
  }

  .brand-logo {
    padding: 15px;
    font-size: 32px;
    font-weight: bold;
    a {
      text-decoration: none;
      color: white;

      &:hover {
      color:#ddd;
    }
    }
  }

  .some-icons {
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    svg {
      fill: white;
    }
  }
` 
const Footer = () => {
  return (
    <Wrapper>
      <div className="nav-links">
        <Link to="news">News</Link>
        <Link to="jobs">Jobs</Link>
        <Link to="weather">Weather</Link>
        {/* <Link to="posts">Posts</Link> */}
      </div>
      <div className="brand-logo">
        <Link to="home">
          <Logo />
        </Link>
      </div>
      <div className="some-icons">
        <a href="https://www.facebook.com/bibhor.shrestha.733" target="_blank" className="facebook"><Facebook /></a>
        <a href="https://www.twitter.com/bivor" target="_blank" className="twitter"><Twitter /></a>
        <a href="https://www.linkedin.com/in/bibhor-shrestha" target="_blank" className="linkedin"><Linkedin /></a>
      </div>
    </Wrapper>
  )
}

export default Footer