import React from "react"
import uuid from "uuid"
import styled from "styled-components"

const StyledLi = styled.li`
  list-style: none;
  margin: 10px;
  position: relative;
  .news-card {
    margin: 0 auto;
    width: 300px;
    height: 300px;
    z-index: 0;
    background-size: cover;
    object-fit: contain;
  }
  .news-item_text {
    position: absolute;
    bottom: 20px;
    padding: 15px;
    color: white;
    a {
      display: block;
      text-decoration: none;
      cursor: pointer;
      color: white;
      font-weight: bold;
    }
  }
  .news-card::before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    opacity: 0.5;
    z-index: 1;
    background-color: black; 
  }
  .news-card:hover {
    transform: scale(1.01);
    transition: 0.5s ease-out;
    cursor: pointer;
  }
`

const NewsCard = (props) => {
  const { item } = props
  let myDate = new Date(`${item.publishedAt}`);
  const publishedTime = Date.now() - myDate.getTime();
  const hours = Math.floor((publishedTime / (1000 * 60 * 60)) % 24);
  return (
    <StyledLi key={uuid.v4()} className="news-item">
      <div className="news-card" style={{backgroundImage: `url(${item.urlToImage})`}}>
        <div className="news-item_text">
        <a href={item.url} target="_blank">{item.title}</a>
        <span className="fa fa-user"> {item.author}</span>
        <span className="far fa-clock">{hours} hours ago</span>
        </div>
      </div>
    </StyledLi>
  )
}

export default NewsCard