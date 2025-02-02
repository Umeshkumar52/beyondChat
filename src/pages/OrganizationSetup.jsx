import React, { useState } from 'react'
import { PiHandPointingFill } from 'react-icons/pi'
import { VscRunAll } from 'react-icons/vsc'
import logo from '../assets/—Pngtree—chatbot_messenger_concept_design_man_6671191[2].png'
import { useNavigate } from 'react-router-dom'
import axiosInstance from '../axiosInstance'
export default function OrganizationSetup(){
    const[fetched,setFetched]=useState(false)
    const[complete,setComplete]=useState(false)
    // const[downloaded,setDownloaded]=useState(false)
    const[progress,setProgress]=useState(0)
    const[data,setData]=useState([])
    const navigate=useNavigate()
    async function scraping(event) {
         event.preventDefault()
         try {
          setFetched(true)
          setComplete(true)
         const response=await fetch("https://beyondchatserver.onrender.com/scrape")         
         const contentlength=response.headers.get('Content-Length')
            const total=parseInt(contentlength || "0" ,10)
            let loaded=0;
            const reader=response.body.getReader()
            const decoder=new TextDecoder()           
            let result=""
            const chunk=[]
            while(true){
              const {done,value}=await reader.read()
              if(done) break;          
              loaded +=value.length;
              // setFetched(true)
              setProgress(Math.round((loaded*100)/total)-196)  
              result +=decoder.decode(value,{stream:true})         
              setData(JSON.parse(result))
            }
           setTimeout(()=>{
            setComplete(false)
           },700)
          } catch (error) {
           return
          }
    }
  return (
    <div className='w-full flex flex-col items-center justify-center gap-4 py-2 px-3'>
    <div className='w-full'>
    <h1 className='text-xl font-bold bg-gradient-to-r from-indigo-700 to-[#ac2dd6] bg-clip-text text-transparent'>
        Setup organisation
      </h1>
    </div>
      <img className='max-w-[16rem]' src={logo}/>
     <div className='flex flex-col gap-2'>
     <h1 className='text-xl font-bold'>Scrape & summarize website</h1>
     <p className='text-sm'>scrapes content from a website and summarises the contents based on a goal</p>
     </div>
      <form onSubmit={scraping} className='flex flex-col gap-4'>
      <div className='flex flex-col gap-1'>
        <h4 className='text-base font-medium'>Company Name <span className='text-red-600'>*</span></h4>
        <p className='text-xs'>Mention detail about company name.
        </p>
        <input type='name' required className='w-full text-sm rounded-lg border-2 hover:ring-1 ring-[#bfbdc7f5] focus:outline-none py-1 px-2' placeholder='Company Name*'/>
        </div>
        {/*  */}
        <div className='flex flex-col gap-1'>
        <h4 className='text-base font-medium'>website URL <span className='text-red-600'>*</span></h4>
        <p className='text-xs'>URL of website that need to be scraped. Should always start
            with https://...
        </p>
        <input type='url' required className='w-full text-sm rounded-lg border-2 hover:ring-1 ring-[#bfbdc7f5] focus:outline-none py-1 px-2' placeholder='Type here*'/>
        </div>
        {/*    */}
        <div className='flex flex-col gap-1'>
        <h4 className='text-base font-medium'>Company description <span className='text-red-600'>*</span></h4>
        <p className='text-xs'>Enter details about company. What are the main goal of the organization.
        </p>
        <input type='description' required className='w-full text-sm rounded-lg border-2 hover:ring-1 ring-[#bfbdc7f5] focus:outline-none py-1 px-2' placeholder='Company description*'/>
        </div>
        <div className='flex border-1 rounded-lg bg-[#dcecf0] gap-2 py-3'>
        <PiHandPointingFill className='text-lg text-yellow-500'/>
            <p className='text-sm'>
             Fill in the options above to get started...
            </p>
        </div>
        <div className='flex justify-center'>
        <button type='submit' className='w-[12rem] flex items-center justify-center gap-2 px-2 py-1 text-white font-medium rounded-md hover:bg-blue-800/100 bg-blue-700/100'><VscRunAll/>{(complete)?`Fetching ${progress} %`:"Run tool"}</button>
        </div>
      </form>
      {/* Output */}
    
   {fetched?<div className='w-full flex flex-col gap-4'>
    <div className='w-full border-2 px-1 border-[#dcdce1]'>
     <h1 className='text-indigo-800 text-lg font-semibold'>Output</h1>
     <hr className='w-full bg-indigo-700'/>
        <div>
            <h2 className='text-lg font-medium '>Summary of website content</h2>
            <div>
              {data.map(Element=>{
                return <div className='py-2 ' key={Element.id}>
                   <h2 className='text-bs font-medium'>{Element.id}.</h2>
                   <p><span className='font-medium'>Status:</span> {Element.status}</p>
                   <div ><p>URL:<a className='text-indigo-700/100' href={Element.url}>{Element.url}</a></p></div>
                   <p>{Element.status!="pending"?Element.content:""}</p>
                </div>
              })
                
              }
            </div>
        </div>
     </div>
    <div className='w-full flex justify-end'>
    <button onClick={()=>navigate('/webintegrate')} className='w-[12rem] flex px-6 py-1 text-white font-medium hover:bg-blue-800/100 bg-blue-700/100 rounded-md'>Integrate & Test</button> 
    </div>
    </div>:""
    }
    </div>
  )
}
