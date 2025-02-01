import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AIpng from '../assets/robot.png'
import { FaGoogle } from 'react-icons/fa'
import GoogleAuth from '../components/GoogleAuth'
import { toast } from 'react-toastify'
export default function Registration() {
  const navigate=useNavigate()
  const[registration,setRegistration]=useState({
    Name:"",
    Email:"",
    Password:""
  })
  function credentialEntries(event){
     event.preventDefault()
     const{name,value}=event.target;
     setRegistration({
      ...registration,
      [name]:value
     })
  }
  async function Send_OTP(event,registration) {
    event.preventDefault()
   try {
    const response=await fetch("http://localhost:5000/send-otp",{
      method:"Post",
      'Content-Type':"application/json",
      data:registration.Email
     })
     if(response){
      navigate('/otpAuth',{state:registration})
     }
   } catch (error) {
    toast.error("failed to register")
   }
  }
  return (
    <div className='w-full justify-center py-4 px-2 flex flex-col items-center'>
      <div className='w-full flex justify-between'>
        <p className='font-medium text-base'><span className='text-[#9f27a3]'>AI</span> Scraper</p>
        <p onClick={()=>navigate('/')} className='text-xs text-indigo-700 cursor-pointer'>Go back to AI Scraper</p>
      </div>
      <div className='max-w-[20rem]  lg:max-w-[21rem] xl:max-w-[30rem] flex flex-col gap-4 items-center'>
        <div className='flex flex-col items-center gap-4'>
            <img className='w-14 h-14' src={AIpng}/>
            <div className='flex flex-col gap-4 items-center'>
                <h1 className='text-2xl font-semibold'>Welcome</h1>
                <h4 className='text-sm font-medium text-[#2b2b2b]'>Sign Up to AI Chatbot to Continue to your dashboard</h4>
            </div>
        </div>
        <form onSubmit={Send_OTP} className='w-full flex flex-col gap-4'>
           <div>
            <input type='Name' required name='Name' value={registration.Name} onChange={credentialEntries}  className='w-full border-2 hover:ring-1 ring-[#1f10bbf5] focus:outline-none p-2' placeholder='Name*'/>
            </div>
            <div>
                <input type='Email' required name='Email' value={registration.Email} onChange={credentialEntries} className='w-full border-2 hover:ring-1 ring-[#1f10bbf5] focus:outline-none p-2' placeholder='Email address*'/>
            </div>
            <div>
                <input type='Password' required name='Password' value={registration.Password} onChange={credentialEntries} className='w-full border-2 hover:ring-1 ring-[#1f10bbf5] focus:outline-none p-2' placeholder='Password*'/>
            </div>
            <button type="submit" className='w-full border-2 hover:ring-2 ring-[#510ab4f5] bg-[#ca0ed4] text-white font-semibold p-2'>Sign Up</button>
            <div>
                <p1>Already have an account <span><Link className='text-[#6f15ff] test-semibold' to='/signin'>Log in</Link></span></p1>
            </div>
            <hr />
            <GoogleAuth onLoginSuccess={(data)=>console.log(data)}/>
        </form>
      </div>
    </div>
  )
}
