import { useState } from 'react'


export function LinksProject({links}){
  const [position, setPosition] = useState("translate-y-20")
  
  function showLinks(){
    setPosition("-translate-y-12")
  }

  function hideLinks() {
    setPosition("translate-y-20")
  }

  return(
    <div className="z-10 absolute w-full h-full top-0 flex flex-row gap-9 justify-center  " onMouseEnter={showLinks} onMouseLeave={hideLinks}>
      {
        links.map((link, index) =>(
        <a 
        href={link.link} 
        key={index} 
        className={`h-fit text-sky-500 bg-gray-950 border-dashed border border-sky-500 rounded-full px-2 py-1 transition-transform duration-300 ${position}`}
        target="_blank" 
        rel="noreferrer">{link.name}</a>
      ))
      }
    </div>
  )
}