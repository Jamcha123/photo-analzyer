import { useEffect, useState } from 'react'
import {motion} from 'framer-motion';
import $ from 'jquery';
import openai from 'openai';
import anime from 'animejs'
import './App.css'

const ai = new openai({apiKey: "<secret-key>", dangerouslyAllowBrowser: true});

function AddCards(){
  const [active, setActive] = useState(false)
  useEffect(() => {
    const [form1, form2] = [document.getElementById("form1"), document.getElementById("form2")]
    form1.addEventListener("submit", async (e) => {
      e.preventDefault();
      $(".items").remove()
      const collections = await ai.chat.completions.create({
        model: "gpt-4o",
        messages: [
          {
            role: "user",
            content: [
              {type: "text", text: "describe the image in 10 words or less"},
              {
                type: "image_url",
                image_url: {
                  url: document.getElementById("text").value,
                  detail: "auto",
                }
              }
            ]
          }
        ]
      });
      let x = document.createElement("h1")
      x.classList.add("items")
      x.innerText = collections.choices[0].message["content"];
      document.getElementById("describe").appendChild(x)
    })
    form2.addEventListener("submit", (e) => {
      e.preventDefault();
      $(".items").remove()
    })
  })
  return(
    <div className="relative w-[100%] h-[100%] m-auto p-[0] flex flex-col align-middle justify-center text-center ">
      <div className="w-[100%] h-[100%] m-auto p-[0] flex flex-row align-middle justify-center text-center relative ">
        <div className="w-[30em] h-[75%] m-auto p-[0] relative flex flex-col align-middle justify-evenly text-center ">
          <div className="relative w-[100%] h-[10%] m-auto p-[0] flex flex-col align-middle justify-center text-center ">
            <h1 className='text-3xl text-white'>Image describer</h1>
          </div>
          <motion.form initial={{scale: 1}} animate={{scale: active? 0 : 1, translateY: active? 0 + "%" : 50 + "%"}} transition={{type: "spring", duration: 2}} action="/" id='form1' method="get" className="w-[100%] h-[100%] m-auto p-[0] flex flex-col align-middle justify-center text-center ">
            <input type="text" placeholder='enter a image url' id='text' className="w-[100%] h-[3em] text-2xl text-white m-auto p-[0] relative text-center border-transparent bg-slate-800 " /> 
            <input type="submit" value="submit" id='submit' onClick={() => setActive(true)} className="w-[100%] cursor-pointer h-[3em] m-auto p-[0] relative text-center text-2xl text-white border-transparent bg-slate-800 " /> 
          </motion.form>
          <motion.form initial={{scale: 0}} animate={{scale: active? 1 : 0, translateY: active? -50 + "%" : 0 + "%"}} transition={{type: "spring", duration: 2}} action="/" id='form2' method="get" className="w-[100%] h-[100%] m-auto p-[0] flex flex-col align-middle justify-center text-center ">
            <div id='describe' className="w-[100%] h-[75%] m-auto p-[0] relative bg-transparent flex flex-col align-middle justify-center text-center ">
              
            </div>
            <div className="w-[100%] h-[25%] mt-[5%] m-auto p-[0] flex flex-row align-middle justify-center text-center relative ">
              <input type="button" id='submit' onClick={() => setActive(false)} value="Go back" className="w-[50%] cursor-pointer h-[3em] m-auto p-[0] text-2xl text-white text-center border-transparent relative bg-slate-800 " />
              <input type="button" id="photo" value="See photo" className="w-[50%] h-[3em] m-auto p-[0] relative border-transparent bg-slate-800 text-2xl text-white text-center cursor-pointer " />
            </div>
          </motion.form>
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
