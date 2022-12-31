/*
  * this cpmponent responsibe for create the main canvas over which we will
  * show the preview in real time
* */

import { useRef, useEffect } from "react"

let currentZoomValue = 1
const zoomDifferenceValue = 0.05
function pan(editorCanvasContent, event) {
  if (editorCanvasContent === null) return
  console.log(event.target)
}


export default function EditorCanvas() {
  const editorCanvasContent = useRef(null)

  // zoom useeffect
  
  useEffect(() => {
    const element = editorCanvasContent.current;
    const zoom = event => {
      event.preventDefault();
      let zoomVal = Math.sign(event.deltaY);
      if(zoomVal==1){
        currentZoomValue -= zoomDifferenceValue;
      }else{
        currentZoomValue += zoomDifferenceValue;
      }
      element.style.transform = `scale(${currentZoomValue})`;
    }
    console.log(element);
    element.addEventListener("wheel",zoom)
    return () => {
      element.removeEventListener("wheel",zoom)
    };
  }, []);
  return <>
    {/* editroCanvas */}
    <div onScroll={() => console.log("editroCanvas")} className="top-0 left-0 h-screen w-screen bg-slate-500 overflow-auto flex justify-center">
      {/* this main elemet will be the representation of pdf page */}
      <main ref={editorCanvasContent} className="fixed w-2/5 h-5/6 bg-white transition duration-100 ease-in-out"> CANVAS </main>
    </div>
  </>
}
