import { useState } from "react"
import {MenuIcon} from "../svg/MenuIcon.jsx"


export function HeaderMenu(){
  const [open, setOpen] = useState(false)

  function openMenu(){
    setOpen(previous => !previous)
  }

  return(
    <div onClick = {openMenu} className="flex flex-col gap-1 relative ml-auto sm:hidden " >
      <MenuIcon   props = "size-5 cursor-pointer" />
      {open &&
        <div className =" flex flex-col gap-1 absolute top-6 right-0 p-5 bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)]               
        border.solid border border-indigo-800/80 rounded-lg">
          <a className= " hover:text-indigo-800/80" href="#home">Home</a>
          <a className= " hover:text-indigo-800/80" href="#experience">Experience</a>
          <a className= " hover:text-indigo-800/80" href="#education">Education</a>
          <a className= " hover:text-indigo-800/80" href="#projects">Projects</a>
        </div>
      } 
    </div>
  )
}