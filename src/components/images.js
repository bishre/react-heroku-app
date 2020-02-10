import React, { useState, useEffect, useRef } from "react"
import styled from "styled-components"
import one from "../images/one.jpg"
import two from "../images/two.jpg"
import three from "../images/three.jpg"
import four from "../images/four.jpg"
import five from "../images/five.jpg"

const Wrapper = styled.div`
  .main-image {
    width: 300px;
    height: 300px;
    margin: 0 auto;
    img {
      min-width: 100%;
      max-height: 100%;
      object-fit: cover;
    }
  }

  .image-gallery {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    height: 100px;
    margin-top: 20px;

    img {
      width: 10%;
      max-height: 80%;
    }
  }
`

const Images = () => {
  const [image, setImage] = useState(null)
  const ref = useRef(null)

  useEffect(() => {
    if (!ref) return
    setImage(ref.current.children[3])
  }, [])

  const handleClick = (e) => {
    console.log(e.target)
    setImage(e.target)
  }
  return (
    <Wrapper>
      <div className="main-image">
        {image && <img src={image.src}/>}
      </div>
      <div className="image-gallery" ref={ref}>
        <img src={one} alt="test" onClick={handleClick}/>
        <img src={two} alt="test" onClick={handleClick}/>
        <img src={three} alt="test" onClick={handleClick}/>
        <img src={four} alt="test" onClick={handleClick}/>
        <img src={five} alt="test" onClick={handleClick}/>
      </div>
    </Wrapper>
  )
}

export default Images