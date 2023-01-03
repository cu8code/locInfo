import { useEffect, useRef, useState } from "react";

const Page = ({num})=>{
  return(
    <>
      <div className="bg-white w-[70mm] h-[90mm]">
      </div>
      <div className="text-slate-50 bg-slate-700 text-xs text-right h-[1rem] mt-[-0.5rem]">Page: {num}</div>
    </>
  );
}
export default function EditorCanvas({zoomVal,pages}){
  return(
    <>
      <div className="w-full min-h-full h-fit flex justify-center">
        <div
        style={{transform:`scale(${zoomVal})`}}
         className="pt-4 pb-4 w-fit h-fit flex flex-col gap-2 origin-top duration-200">
          {pages.map((data)=>{
            return(
              <Page key={data.key} num={data.key}/>
            );
          })}
        </div>
      </div>
    </>
  );
}