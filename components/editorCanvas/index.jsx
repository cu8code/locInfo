/*
 * this cpmponent responsibe for create the main canvas over which we will
 * show the preview in real time
 * */

import { useRef, useEffect, useState } from "react";

let currentZoomValue = 0.6;
const zoomDifferenceValue = 0.05;
let pages = 1;

// for pan
let mouseDown = false; //if mouse is clicked
let canvasOffset = [0, 0];

// checking if canvas is out of viewport
const isInViewport = (element) => {
  const rect = element.getBoundingClientRect();
  return rect.top >= 0 && rect.bottom <= window.innerHeight;
};

const pan = (e, element) => {
  e.preventDefault();
  const rect = element.getBoundingClientRect();
  //if mouse is clicked and canvas is out of viewport due to zoom
  if (mouseDown /*&& !isInViewport(element)*/) {
    // stack overflow :)
    element.style.top = e.clientY + canvasOffset[1] + "px";
    element.style.left = e.clientX + canvasOffset[0] + "px";
  }
  // console.log(rect.top<=);
};


const Page = ()=>{
  return(
    <main
      style={{
        width: "210mm",
        height: "297mm",
      }}
      className="bg-white transition duration-100 ease-in-out"
    >
      {" "}
      CANVAS{" "}
    </main>
  );
}
export default function EditorCanvas() {
  const [pagesArray,setPages]=useState([{key:1}])
  const canvas = useRef(null);
  const canvasContainer = useRef(null);

  useEffect(() => {
    const element = canvasContainer.current;
    const zoom = (event) => {
      event.preventDefault();
      let zoomVal = Math.sign(event.deltaY);
      if (zoomVal == 1 && currentZoomValue > 0.3) {
        currentZoomValue -= zoomDifferenceValue;
      } else if (zoomVal == -1 && currentZoomValue < 2) {
        currentZoomValue += zoomDifferenceValue;
      }
      console.log(event.x,event.y,",",canvas.current.offsetLeft);
      canvas.current.style.transform = `scale(${currentZoomValue})`;
    };

    //event listeners for zoom and pan
    element.addEventListener("wheel", zoom);

    element.addEventListener("mousedown", (e) => {
      e.preventDefault();
      mouseDown = true;
      // logic from stack overflow
      canvasOffset = [
        canvas.current.offsetLeft - e.clientX,
        canvas.current.offsetTop - e.clientY,
      ];
    });
    element.addEventListener("mouseup", () => {
      mouseDown = false;
    });
    element.addEventListener("mousemove", (e) => {
      pan(e, canvas.current);
    });
    return () => {
      element.removeEventListener("wheel", zoom);
    };
  }, []);
  const addPages=()=>{
    pages++;
    setPages([...pagesArray,{key:pages}]);
    console.log(canvas.current.style.left)

  }
  return (
    <>
      {/* editroCanvas */}
      <div
        onScroll={() => console.log("editroCanvas")}
        style={{ background: "#171717" }}
        ref={canvasContainer}
        className="overflow-hidden top-0 left-0 h-screen w-screen flex justify-center items-center"
      >
        {/* this main elemet will be the representation of pdf page */}
        <div
          ref={canvas}
          style={{
            transform: "scale(0.6)",
            minWidth: "210mm",
            minHeight: "210mm",
            left: "35vw",
            transformOrigin:"0% center"
          }}
          className="w-fit h-fit fixed gap-8 flex flex-row"
        >
        {pagesArray.map((data)=>{
          return(
            <Page key={data.key}/>
          )
        })}
        </div>
        
      </div>
      <button className="fixed top-0 bg-white" onClick={addPages}>Add page</button>
    </>
  );
}
