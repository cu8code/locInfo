/*
  * this cpmponent responsibe for create the main canvas over which we will
  * show the preview in real time
* */

import { useRef } from "react"

let currentZoomValue = 1
const zoomDifferenceValue = 0.05


/*
  * when we zoom! we increse / decrease the size of the editorCanvasContent
  * when we pan we move the editorCanvasContent left and right
  * */

function zoomin(editorCanvas) {
  if (editorCanvas === null) return
  // console.log("zoomin")
  currentZoomValue += zoomDifferenceValue
  editorCanvas.current.style['transform'] = `scale(${currentZoomValue})`
}

function zoomout(editorCanvasContent) {
  if (editorCanvasContent === null) return
  // console.log("zoomout")
  currentZoomValue -= zoomDifferenceValue
  editorCanvasContent.current.style['transform'] = `scale(${currentZoomValue})`
}

function pan(editorCanvasContent, event) {
  if (editorCanvasContent === null) return
  console.log(event.target)
}

export default function EditorCanvas() {
  const editorCanvasContent = useRef(null)
  return <>
    {/* editroCanvas */}
    <div onScroll={() => console.log("editroCanvas")} className="fixed top-0 left-0 h-screen w-screen bg-slate-500 overflow-auto">
      {/* this main elemet will be the representation of pdf page */}
      <main ref={editorCanvasContent} className="bg-white transition duration-20"> CANVAS </main>
    </div>
    {/* zoom control button that will be placed at the end of the screen */}
    <div className="fixed w-screen h-screen top-0 left-0 flex justify-center">
      <button type="button" onClick={() => zoomin(editorCanvasContent)}>zoomin</button>
      <button type="button" onClick={() => zoomout(editorCanvasContent)}>zoomout</button>
    </div>
  </>
}
