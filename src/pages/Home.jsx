import React from "react";
import AIpng from "../assets/robot.png";
import scrapImg from "../assets/WhatsApp Image 2025-01-29 at 19.49.25_b706c4c8.jpg";
import bgImg from "../assets/—Pngtree—ai_chatbot_concept_illustration_14527457[1].png";
import helpLogo from '../assets/WhatsApp Image 2025-01-30 at 15.54.35_7e06ab78.jpg'
import { MdScreenSearchDesktop } from "react-icons/md";
import { IoFileTrayStackedOutline } from "react-icons/io5";
import { FaRobot } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="relative flex flex-col gap-14 lg:gap-0 pb-10 justify-center">
      <img onClick={()=>navigate('/orgnizationsetup')} className="fixed bottom-2 cursor-pointer right-2 w-8 rounded-xl" src={helpLogo}/>
      <div className="sticky top-0 flex gap-3 py-2 bg-[#ffffff] items-center px-4">
        <img className="w-10 h-10" src={AIpng} />
        <h1 className="font-semibold text-base">
          <span className="text-[#f83cf8]">AI</span> Scraper
        </h1>
      </div>
      <div className="lg:flex-row lg:px-6 flex flex-col items-center gap-6">
      <div className="w-full flex flex-col px-4 gap-8 items-center">
          <h1 className="items-center font-semibold text-2xl bg-gradient-to-t from-[#ca4bea] to-[#1108bf] bg-clip-text text-transparent">
            {/* Easy Web Scraping for Anyone */}
            The easiest way to extract and <span className="text-blue-700/100">monitor</span> data from any website
          </h1>
          <p className="text-sm font-sans">
            AI Scraper is your no-coding solution for web scraping to pages into
            structured data within clicks
          </p>
          <button
            onClick={() => navigate("/orgnizationsetup")}
            className="min-w-[12rem] max-w-[16rem] py-2 px-4 rounded-lg text-white font-medium hover:ring-1 ring-indigo-700 hover:bg-indigo-800 bg-indigo-700 ease-in-out"
          >
            Get Started
          </button>
        </div>
      <img className="w-full max-w-[26rem]" src={bgImg}/>
      </div>

      {/* third section */}
      <div className="flex flex-col gap-4 px-2">
          <div className="flex flex-col py-6 px-2 gap-4 rounded-lg border-[#dee0e0] bg-[#f9f9f9]">
            <div className="w-10 h-10 rounded-lg flex justify-center bg-white items-center border-2">
              <IoFileTrayStackedOutline />
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="font-medium text-base">Data Extraction</h1>
              <p className="text-sm">
                Extract specific data from any website in the form of a
                spreadsheet that feels itself.
              </p>
            </div>
          </div>
          <div className="flex flex-col py-6 px-2 gap-4 rounded-lg border-[#dee0e0] bg-[#f9f9f9]">
            <div className="w-10 h-10 rounded-lg flex justify-center bg-white items-center border-2">
              <MdScreenSearchDesktop />
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="font-medium text-base">Monitoring</h1>
              <p className="text-sm">
                Extract data on a schedule and get notified on changes.
              </p>
            </div>
          </div>
          <div className="flex flex-col py-6 px-2 gap-4 rounded-lg border-[#dee0e0] bg-[#f9f9f9]">
            <div className="w-10 h-10 rounded-lg flex justify-center bg-white items-center border-2">
              <FaRobot />
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="font-medium text-base">Prebuilt robot</h1>
              <p className="text-sm">
                Browse prebuilt robots for popular use cases and start using
                them right away.
              </p>
            </div>
          </div>
        </div>
    </div>
  );
}
