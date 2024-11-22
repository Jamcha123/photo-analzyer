import { useEffect, useRef, useState } from 'react'
import {motion} from 'framer-motion';
import $ from 'jquery';
import './App.css'

function AddCards(){
  useEffect(() => {
    const form = document.getElementById("form"); 
    const input = document.getElementById("image");
  })
  return(
    <div className="relative w-[100%] h-[100%] m-auto p-[0] bg-transparent flex flex-col align-middle justify-center">
      <div className="w-[40em] h-[40em] m-auto p-[0] flex flex-col align-middle justify-center text-center translate-y-[0%]  ">
        <div className="w-[100%] h-[50%] m-auto p-[0] bg-transparent flex flex-col align-middle justify-evenly ">
          <div className="w-[100%] h-[20%] m-auto p-[0] flex flex-col align-middle justify-center text-center ">
            <h1 className='text-3xl text-white'>Image Describer - OpenAI</h1>
            <h1 className="text-3xl text-white">Please be patient</h1>
          </div>
          <div className="w-[100%] h-[80%] m-auto p-[0] relative flex-col align-middle justify-center text-center flex  " id='text'></div>
        </div>
        <div className="w-[100%] h-[50%] m-auto p-[0] bg-transparent flex flex-row md:flex-col align-middle justify-evenly ">
          <form action="/" className="w-[100%] h-[100%] m-auto p-[0] relative flex flex-row align-middle justify-center text-center " method='get' id='form'>
            <div className="w-[100%] h-[7.5em] m-auto p-[0] flex flex-row align-middle justify-center text-center  ">
              <input type="text" id='image' placeholder='enter a image url' className="w-[75%] h-[3em] m-0 p-[0] bg-slate-700 text-center text-white text-2xl cursor-text " />
              <motion.input initial={{scale: 1}} whileHover={{scale: 0.8}} transition={{type: "spring", duration: 1}} type="submit" id='submit' value="Submit" className="w-[20%] h-[3em] m-0 p-[0] bg-slate-700 border-white border-[1px] text-center text-white text-2xl cursor-pointer " />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default function App(){
  return(
    <div className="fixed w-[100%] h-[100vh] m-auto p-[0] bg-transparent ">
      <AddCards></AddCards>
    </div> 
  )
}
