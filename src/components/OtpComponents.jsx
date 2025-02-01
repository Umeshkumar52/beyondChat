import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import logo from '../assets/WhatsApp Image 2025-02-01 at 23.38.34_68519c56.jpg'
export default function OtpComponents() {
    const location=useLocation()
   const userData=location.state || {}
   const [otp,setOtp]=useState()
   const[message,setMessage]=useState("")
   async function verifyotp(event) {
    event.preventDefault()
    try {
        const response=await fetch("http://localhost:5000/otp-verify",{
            method:"Post",
            'Content-Type':'application/json',
            data:JSON.stringify({otp:otp,email:userData.Email})
          })
         if(response){
            console.log(response);            
            setMessage(response.data.message)
            const userRegister=await fetch("http://localhost:5000/signup",{
                method:"POST",
                 headers:{
                 'Content-Type':'application/json'
                   },
                data:JSON.stringify(userData)
              })
         }
    } catch (error) {
        setMessage("Invalid OTP")
    }
   }
  return (
    <div className='w-full flex flex-col justify-center items-center'>
        <img className='max-w-[10rem]' src={logo}/>
      <div className='w-full max-w-[16rem] flex flex-col items-center gap-4'>
       <div className='w-full flex flex-col items-center gap-2'>
       <h1 className='text-xl font-semibold'>OTP Verification</h1>
       <p className='text-sm font-medium'>
          {`Enter OTP Code Sent to ${userData.Email}`}
       </p>
       </div>
       <input type='number'min="6" maxLength="6" onChange={(event)=>setOtp(event.target.value)} required placeholder='Enter OTP' className='w-full py-1 px-2 ring-2 focus:outline-none'/>
       <div className='flex flex-col items-center gap-2' >
        <p>Dont't recieve OTP code?</p>
        <p className='cursor-pointer text-indigo-800 font-medium'>Resend Code</p>
       </div>
       <button onClick={verifyotp} type='submit' className='w-full py-1 text-white font-medium text-base focus:ring-2 ring-[#250571] hover:bg-indigo-700 bg-indigo-600 '>Verify & Proceed</button>
     </div>
    </div>
  )
}
