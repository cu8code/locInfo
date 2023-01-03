import { useState } from "react";
import EditorCanvas from "../components/editorCanvas";
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import NoteAddIcon from '@mui/icons-material/NoteAdd';

let totalPages = 1;

export default function Home() {
  const [theme,setTheme]=useState("white");
  const [zoom,setZoom]=useState(1.5);
  const [pages,setpages]=useState([{key:1}]);
  const handelZoom=(zoom)=>{
    if(zoom>=1&zoom<=3) setZoom(zoom);
  }
  const addPages=()=>{
    totalPages++;
    setpages([...pages,{key:totalPages}])
  }
  return (
    <>
      <div className="flex flex-col w-full h-screen overflow-hidden">
        <nav className="w-full h-24 bg-slate-700 min-h-[6rem]">
          <button onClick={()=>handelZoom(zoom+0.5)}><ZoomInIcon style={{color:theme}}/></button>
          <button onClick={()=>handelZoom(zoom-0.5)}><ZoomOutIcon style={{color:theme}}/></button>
          <button onClick={addPages}><NoteAddIcon style={{color:theme}}/></button>
        </nav>
        <div className="flex flex-1 h-[calc(100vh-6rem)]">
          <div className="bg-slate-800 w-52"></div>
          <div className="bg-gray-800 flex-1 overflow-y-auto scrollbar-none scroll-smooth">
            <EditorCanvas zoomVal={zoom} pages={pages}/>
          </div>
        </div>
      </div>
    </>
  );
}
