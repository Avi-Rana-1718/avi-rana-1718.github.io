import { useState } from "react"

export default function ShareBtn() {
    const [isList, setIsList] =useState(false)
    return (
        <>
        <button
        className="border-[#213659] hover:underlne hover:bg-[#213659] border-2 rounded-full px-2 py-1"
        onClick={()=>{setIsList(!isList)}}
        >
            Share
        </button>
        <div className={`md:ml-5 ${isList?"block":"hidden"}`}>
            <span className={`inline leading-none w-0 h-0 border-l-[0px] border-l-transparent border-b-[9px] border-b-[#EAE7EF] border-r-[15px] border-r-transparent`}
            ></span>
        <ul
        className={`bg-[#EAE7EF] mt-[2px] p-2  text-[#282828] rounded flex flex-col absolute gap-y-1`}
        >
            <li 
            className="p-2 hover:bg-[#d6d4d4] hover:underline cursor-pointer rounded"
            onClick={(e)=>{
                navigator.clipboard.writeText(window.location.href);
                e.target.innerHTML = "Copied!"
                
            }}
            >Copy link</li>
            <li 
            className="p-2 hover:bg-[#d6d4d4] hover:underline cursor-pointer rounded"
            onClick={()=>{
                navigator.share({
                    url: window.location.href,
                  });
            }}
            >Share</li>
            </ul>
        </div>
        </>
    )
}