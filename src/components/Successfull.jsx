import React from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export default function Successfull() {
  const navigate = useNavigate();
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      {true ? (
        <div className="flex flex-col gap-12  items-center">
          <div className="integrationStatus w-full flex flex-col items-center">
            <span className="text-[8rem]">🎉</span>
              <div className="flex flex-col items-center text-2xl font-semibold text-green-600/100" >
              <p>Congratulations!</p>
              <p>
              Integration Successfully
            </p>
              </div>
           
          </div>
          <button
            onClick={() => navigate("/dashboard")}
            className="px-2 py-1 bg-gradient-to-bl from-[#9273ea] to-[#3de127] rounded-md font-medium text-base text-white"
          >
            Explore Admin Panel
          </button>
        </div>
      ) : (
        <div className="flex flex-col gap-6 px-6 items-center">
          <p className="text-3xl font-bold">❌</p>
          <p className="text-lg font-medium">
            Chatbot integration not detected. Please check your installation
          </p>
          <button onClick={()=>navigate(-1)} className="flex gap-2 items-center font-semibold text-base text-white bg-red-600/100 hover:bg-red-700/100 px-4 py-2 rounded-md">
            <IoMdArrowRoundBack /> <span>Back</span>
          </button>
        </div>
      )}
    </div>
  );
}
