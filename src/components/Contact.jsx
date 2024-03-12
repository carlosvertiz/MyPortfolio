import {MailBox} from './MailBox.jsx'
import {LinkedInIcon} from '../svg/LinkedInIcon.jsx'
import {GitHubIcon} from '../svg/GitHubIcon.jsx'
import { useState } from 'react'


export function Contact({section, email}){
  const [visible, setVisible] = useState(false)

  function openMenu(){
    setVisible(true)
  }

  function closeMenu(){
    setVisible(false)
  }


  return (
    <section 
      className='flex flex-col self-end gap-2 sticky bottom-[2%] right-[5%] md:bottom-[5%] md:right-[5%] w-fit'
      onMouseLeave={closeMenu}>

      <fragment  className={`flex flex-col items-end justify-center gap-3 pr-5 transition-opacity duration-300 ${visible? "opacity-1" : "opacity-0 invisible"}`}> 
        <div className='flex flex-col gap-1'>
          <a className= "self-start p-2 bg-gray-950 border-dashed border border-indigo-500/30 rounded-full" href="https://github.com/carlosvertiz" target="_blank" rel="noreferrer">
            <GitHubIcon props = "size-8"/>
          </a>
          <a className= "self-start p-2 bg-gray-950 border-dashed border border-indigo-500/30 rounded-full" href="https://www.linkedin.com/in/carlosvertiz/" target="_blank" rel="noreferrer">
            <LinkedInIcon props = "size-8" />
          </a>
        </div>
        <div className='p-2 bg-gray-950 border-dashed border border-indigo-500/30 rounded-full'>
          <MailBox email={email}/>
        </div>
      </fragment>
      
      <div 
        className="flex self-end items-center h-fit mt-2 w-fit bg-gray-950 border-dashed border border-indigo-500/30 rounded-full" 
        onMouseEnter={openMenu}>
        <p className=" p-3 text-center rounded-3xl w-full text-sky-500" >{section}</p>
      </div>
    </section>
  )
}