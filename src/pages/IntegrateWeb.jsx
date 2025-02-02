import React, { createElement, useState } from "react";
import logo from "../assets/—Pngtree—chatbot_messenger_concept_design_man_6671190_(1)[2].png";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../axiosInstance";
import { toast, ToastContainer } from "react-toastify";
export default function IntegrateWeb() {
  // https://beyondchatserver.onrender.com
  const chatbot_intg_url = "http://your-chatbot-url.com/chatbot.js";
  const navigate = useNavigate();
  const[message,setMessage]=useState("")
  const [copy, setCopy] = useState(false);
  const [email,setEmail]=useState("")
  const copyToClipBoard=()=>{
    navigator.clipboard.writeText(chatbot_intg_url)
    .then(()=>{
      setCopy(true)
    })
  }
   async function sent_mail(event){
    event.preventDefault()
    try {
      const response=await axiosInstance.post('/sendmail',{email:email})
      setMessage(response.message)
      setEmail("")
    } catch (error) {
     return
    }
   }
  return (
    <div className="relative w-full px-3 pb-[6rem] flex flex-col justify-center items-center">
      {/* <BiArrowBack className="absolute top-3 right-3 text-xl font-bold"/> */}
      <button onClick={()=>window.open("https://client-website.com","_blank")} className="fixed bg-gradient-to-bl from-[#9273ea] to-[#3de127] flex justify-center px-3 py-2 items-center bottom-2 right-2 rounded-tr-xl rounded-bl-3xl animate-bounce ease-linear ">
       <p className="text-base font-medium">test chatbot</p>
      </button>
      <img className="max-w-[16rem]" src={logo} />
      <div className="flex flex-col gap-8 items-center ">
{/* 2 section */}
      <div className="w-full flex flex-col gap-4 items-center">
        <h1 className="text-lg font-semibold">
          Integrate your website with AI Scaper
        </h1>
        {/*  */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center px-2 gap-10 border-2 border-[#bebcbb]">
            <p className="integrate_url">
              <a
                className="text-indigo-700 font-medium cursor-pointer text-sm"
                href={chatbot_intg_url}
              >
                {chatbot_intg_url}
              </a>
            </p>
            <p
              onClick={copyToClipBoard}
              className="cursor-pointer flex justify-center items-center w-[6rem] font-base text-sm"
            >
             <span> {copy ? "Copeid" : "Copy"}</span>
            </p>
          </div>
          <form onSubmit={sent_mail} className="flex flex-col gap-4 ">
          <div className="text-base text-[#3e4749] font-medium">Send instruction through E-mail</div>
          <input type="Email" value={email} required onChange={(e)=>setEmail(e.target.value)} className="focus:outline-none p-1 focus:ring-2 ring-slate-300" placeholder="E-mail address.."/>
          <div className="flex justify-end">
            <button type="submit" className="font-medium text-base bg-slate-300 hover:ring-2 ring-slate-700/100 hover:bg-slate-400 p-1 rounded-md">Send Instruction</button>
          </div>
          </form>
          {/* Sunt success msg */}
         
        </div>
      </div>
{/* third section */}
      <div className="flex flex-col gap-6">
        <h2 className="font-semibold text-lg "><span className="text-green-600">Congratulations!</span> Your Chatbot Integration is Almost Ready</h2>
        <div className="flex flex-col items-center gap-4">
          <button
            onClick={() => (true ? navigate("/success") : "")}
            className="max-w-[10rem] font-medium text-white text-base bg-indigo-600/100 hover:ring-2 ring-slate-700/100 hover:bg-indigo-500/100 px-3 py-2 rounded-md"
          >
            Test-Integration
          </button>
        </div>

      </div>
      </div>
    
    </div>
  );
}
