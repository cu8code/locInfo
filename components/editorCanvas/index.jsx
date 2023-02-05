import { useRef } from "react";

export default function EditorCanvas({ zoomVal, pages, temp}) {
  const iframe = useRef(null);
  return (
    <>
      <div className="w-full min-h-full h-fit flex justify-center">
        <iframe ref={iframe}></iframe>
      </div>
    </>
  );
}
