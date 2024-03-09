import { useState } from "react"
import {MenuIcon} from "../svg/MenuIcon.jsx"

export function HeaderMenu({sections}){
  const [open, setOpen] = useState(false)

  function openMenu(){
    setOpen(previous => !previous)
  }

  return(
    <div onClick = {openMenu} className="flex flex-col gap-1 relative ml-auto sm:hidden " >
      <MenuIcon   props = "size-5 cursor-pointer" />
      {open &&
        <div className =" flex flex-col gap-4 absolute top-6 right-0 p-5 bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)]               
        border.solid border border-indigo-800/80 rounded-lg">
          <a className= " hover:text-indigo-800/80" href="#home">{sections.Home}</a>
          <a className= " hover:text-indigo-800/80" href="#experience">{sections.Experience}</a>
          <a className= " hover:text-indigo-800/80" href="#education">{sections.Education}</a>
          <a className= " hover:text-indigo-800/80" href="#skills">{sections.Skills}</a>
          <a className= " hover:text-indigo-800/80" href="#projects">{sections.Projects}</a>
        </div>
      } 
    </div>
  )
}