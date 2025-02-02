import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import logo from '../assets/WhatsApp Image 2025-02-01 at 23.38.34_68519c56.jpg'
import axiosInstance from '../axiosInstance'
export default function OtpComponents() {
  const navigate=useNavigate()
    const location=useLocation()
   const userData=location.state || {}
   const [otp,setOtp]=useState()
   const[message,setMessage]=useState("")
     async function verifyotp(event) {
    event.preventDefault()
    try {
        const response=axiosInstance.post('/verify-otp',{otp:otp,email:userData.Email})
          setMessage(response.message)          
           if(response.message!="Invalid OTP") {
            localStorage.setItem("user",{
              Isloggdin:true
            })
            navigate("/")
           }
    } catch (error) {
        setMessage("Invalid OTP")
    }
   }
   async function ResendCoe() {
    try {
      setOtp("")
      setMessage("")
     await axiosInstance.post('/send-otp',{email:userData.Email})
    } catch (error) {
      return
    }
    
   }
  return (
    <div className='w-full flex flex-col justify-center py-6 items-center'>
        <img className='min-w-[10rem] max-w-[16rem]' src={logo}/>
      <div className='w-full max-w-[16rem] flex flex-col items-center gap-4'>
       <div className='w-full flex flex-col items-center gap-2'>
       <h1 className='text-xl font-semibold'>OTP Verification</h1>
       <p className='text-sm font-medium'>
          {`Enter OTP Code Sent to ${userData.Email}`}
       </p>
       </div>
      <div className='w-full flex flex-col gap-1'>
       <input type='number'min="6" maxLength="6" value={otp} onChange={(event)=>setOtp(event.target.value)} required placeholder='Enter OTP' className='w-full py-1 px-2 ring-2 focus:outline-none'/>
       <div className='w-full h-4 flex justify-end items-center'>
        <p className='text-sm font-medium text-red-700'>{message}</p>
       </div>
       </div>
       <div className='flex flex-col items-center gap-2'>
        <p>Dont't recieve OTP code?</p>
        <p onClick={ResendCoe} className='cursor-pointer text-indigo-800 font-medium'>Resend Code</p>
       </div>
       <button onClick={verifyotp} type='submit' className='w-full py-1 text-white font-medium text-base focus:ring-2 ring-[#250571] hover:bg-indigo-700 bg-indigo-600 '>Verify & Proceed</button>
     </div>
    </div>
  )
}
