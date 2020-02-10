import React, { useState, useEffect } from "react"
import axios from "axios"
import styled from "styled-components"
import PostItem from "./PostItem"

const Wrapper = styled.div`
  padding: 16px;
  margin-bottom: 50px;
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
`

const Posts = () => {
  const [posts, setPosts] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("https://buildmynet.com/wp-json/wp/v2/posts")
      console.log(result)
      setPosts(result.data)
    }
    fetchData()
  }, [])
  return (
    <Wrapper>
      <h3>Posts</h3>
      <ul>
      {posts && posts.map(post => (
        <PostItem key={post.id} post={post}/>
      ))}
      </ul>
    </Wrapper>
  )
}

export default Posts