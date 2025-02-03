import React from 'react'
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
const clientId = '708464769189-pi4nejq40haojf53kg3g1da9lenqb5a9.apps.googleusercontent.com';
export default function GoogleAuth() {
  const navigate=useNavigate()
  return (
    <GoogleOAuthProvider clientId={clientId}>
    <GoogleLogin
      onSuccess={(credentialResponse) => {
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
