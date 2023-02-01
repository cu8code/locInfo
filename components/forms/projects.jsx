import { useEffect } from "react";
import { useJsonContext } from "../../context/jsonContext";

export default function ProjectsForm() {
  const [json,setJson] = useJsonContext()

  useEffect(()=>{
    console.log("ProjectsForm")
  })

    return (
      <>
        <div className="w-full bg-cyan-600 text-slate-50 text-center">
          Projects
        </div>
      </>
    );
  }
  
