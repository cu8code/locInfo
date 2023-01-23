import { useRef } from "react";

export default function FormCover({setToggle,FormComponent}){
    return(
        <>
            <div id="cover" onClick={(e)=>{if(e.target.id=="cover")setToggle(false)}} className="fixed w-full h-full bg-opacity-30 bg-black z-10 min-w-[860px] top-0 flex justify-center items-center">
                <div className="w-[500px] h-[400px] bg-black">
                    {FormComponent}
                </div>
            </div>
        </>
    );
}