import React from 'react'
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
const clientId = 'dogwood-site-449612-p1';
export default function GoogleAuth() {
  const navigate=useNavigate()
  return (
    <GoogleOAuthProvider clientId={clientId}>
    <GoogleLogin
      onSuccess={(credentialResponse) => {
        const decoded = jwtDecode(credentialResponse.credential);
        console.log('User Info:', decoded);
        navigate('/')
      }}
      onError={() => {
        return
      }}
    />
  </GoogleOAuthProvider>

  )
}
