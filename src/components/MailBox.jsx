import { useState } from "react"
import { MailIcon } from "../svg/MailIcon.jsx"


export function MailBox({email}){
  const [copied, setCopied] = useState(false)

  async  function copyMail(){
    await navigator.clipboard.writeText(email)
    setCopied(true)

    setTimeout(()=>{
      setCopied(false)
    }, 2000)
  }

  function sendMail(){
    window.open(`mailto:${email}`)
  }
  
  return (
    <div className="relative flex items-center flex-col">
      <div className="flex flex-row gap-2 items-center w-fit h-7
                    bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] 
                      border-solid border border-indigo-800/80 rounded-full"> 
          <a onClick={sendMail} className = "px-1 bg-cyan-600 rounded-l-full border-solid border border-indigo-800/80 cursor-pointer">
            <MailIcon props = "size-6" />
          </a>
          <p className="">{email}</p>
          <button onClick={copyMail} className = " h-7 px-1 bg-cyan-600  rounded-r-full  border-solid border border-indigo-800/80">
            <p className="text-black  font-semibold">Copy</p>
          </button>
      </div>
      {copied && <p className="absolute bg-cyan-600  rounded-full px-3 py-1 top-[40px]">Email copied!</p>}
    </div>
  )
}     
