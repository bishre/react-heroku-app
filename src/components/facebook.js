import React, { useState, useEffect } from "react"
import FacebookLogin from "react-facebook-login"

const Facebook = () => {
  const [userData, setUserData] = useState(
    {
      name: "", 
      email: "", 
      picture: { 
        data: {
          url: ""
        }
      }
    })
  const [isLoggedin, setIsLoggedin] = useState(false)

  const componentClicked = () => {
    console.log('clicked')
  }

  const responseFacebook = response => {
    setUserData(response)
    setIsLoggedin(true)
  }

  let fbContent 
  if (isLoggedin) {
    fbContent = (
    <div style={{
      width: '200px',
      margin: 'auto',
      background: '#f4f4f4',
      padding: '20px',
      textAlign: 'center',
    }}>
      <img src={userData.picture.data.url} alt={userData.name}/>
      <h5>Welcome</h5>
      <h4 style={{ margin: '0px' }}>{userData.name}</h4>
    <p style={{ fontSize: '12px' }}>Email: {userData.email}</p>
    </div>
    )
  } else {
    fbContent = <FacebookLogin
    appId="518458608973372"
    autoLoad={true}
    fields="name,email,picture"
    onClick={componentClicked}
    callback={responseFacebook} />
  }
  
  return (
    <div>
      {fbContent}
    </div>
  )
}

export default Facebook