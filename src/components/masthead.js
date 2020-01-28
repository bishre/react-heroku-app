import React, { useState, useEffect } from "react"
import styled from "styled-components"
import axios from "axios"

const Wrapper = styled.div`
  max-width: 100%;
  overflow: hidden;
  .masthead-image {
    position: relative;
    max-width: 500px;
    margin: 0 auto;
    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.6);
    }
    .masthead-image__text {
      position: absolute;
      margin: 0;
      top: 40%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: white;
      font-size: 32px;
    }
    .masthead-image__background {
      max-width: 100%;
      margin: 0 auto;
      text-align: center;
    }
  }
  .masthead-text {
    left: 0;
    width: 100%;
    height: 500px;
    padding: 10px 15px;
    text-align: center;
    vertical-align: middle;

    .masthead-text__content {
      top: 50%;
      left: 50%;
    }
  }
`

const MastHead = () => {
  const [image, setImage] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("https://picsum.photos/500")
      setImage(result.config.url)
    }
    fetchData()
  }, [])
  return (
    <Wrapper>
      <div className="masthead-image">
        <h2 className="masthead-image__text">Welcome</h2>
        <img src={image} alt="masthead" className="masthead-image__background"/></div>
      <div className="masthead-text">
          <h3>About us</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam deleniti ratione in sequi illo illum eveniet reiciendis cum molestias! Obcaecati voluptates commodi possimus magnam mollitia. Ea error in ipsam amet?</p>
      </div>
    </Wrapper>
  )
}

export default MastHead