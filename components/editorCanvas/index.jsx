/*
 * this cpmponent responsibe for create the main canvas over which we will
 * show the preview in real time
 * */

import { useRef, useEffect } from "react";

let currentZoomValue = 1;
const zoomDifferenceValue = 0.05;

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
  }
  // console.log(rect.top<=);
};
export default function EditorCanvas() {
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

  return (
    <>
      {/* editroCanvas */}
      <div
        onScroll={() => console.log("editroCanvas")}
        ref={canvasContainer}
        className="top-0 left-0 h-screen w-screen bg-slate-500 overflow-auto flex justify-center items-center"
      >
        {/* this main elemet will be the representation of pdf page */}
        <main
          ref={canvas}
          className="fixed w-2/6 h-5/6 bg-white transition duration-100 ease-in-out"
        >
          {" "}
          CANVAS{" "}
        </main>
      </div>
    </>
  );
}
