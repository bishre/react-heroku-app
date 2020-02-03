import React, { useState, useEffect } from "react"
import axios from "axios"
import styled from "styled-components"
const dateFormat = require("dateformat")

const StyledLi = styled.li`
  text-align: center;
  img {
    padding: 0 16px;
    max-width: 100%;
  }
`

const PostItem = (props) => {
  const { post } = props
  const [imageUrl, setImageUrl] = useState('')
  const [author, setAuthor] = useState('')

  useEffect(() => {
    const { featured_media, author } = post
    const getImageUrl = axios.get(`http://buildmynet.com/wp-json/wp/v2/media/${featured_media}`)
    const getAuthor = axios.get(`http://buildmynet.com/wp-json/wp/v2/users/${author}`)

    Promise.all([getImageUrl, getAuthor]).then(res => {
      setImageUrl(res[0].data.media_details.sizes.full.source_url)
      setAuthor(res[1].data.name)
    })
  }, [post])

  const formatDate = (dateString, format) => {
    const date = new Date(dateString)
    const formatted = dateFormat(date, format)
    return formatted
  }

  return (
    <StyledLi>
      <div>
        <h5>{post.title.rendered}</h5>
        <img src={imageUrl} alt=""/>
        <small>By: <strong>{author}</strong></small>
        <div dangerouslySetInnerHTML={{ __html: post.content.rendered}}></div>
        <h4>{formatDate(post.date, "dd mmm yyyy")}</h4>
      </div>
    </StyledLi>
  )
}

export default PostItem