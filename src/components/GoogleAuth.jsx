import React from 'react'
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
const clientId = '296055646871-h7t8vokik6beui0v8rc7rqarujaegbs4.apps.googleusercontent.com';
export default function GoogleAuth() {
  const navigate=useNavigate()
  return (
    <GoogleOAuthProvider clientId={clientId}>
    <GoogleLogin
      onSuccess={(credentialResponse) => {
        localStorage.setItem("isloggdin",true)
        const decoded = jwtDecode(credentialResponse.credential)
        navigate('/')
      }}
      onError={() => {
        console.log("Login Failed")
      }}
    />
  </GoogleOAuthProvider>

  )
}
