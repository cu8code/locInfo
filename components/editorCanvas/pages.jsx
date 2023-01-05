import Education from "../sections/education";

export default function Page({num,json}){
    return(
      <>
        <div className="bg-white w-[70mm] h-[90mm]">
          <Education education={json["education"]}/>
        </div>
        <div className="text-slate-50 bg-slate-700 text-xs text-right h-[1rem] mt-[-0.5rem]">Page: {num}</div>
      </>
    );
  }