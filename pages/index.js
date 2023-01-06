import { useState } from "react";
import { sectionButtons } from "./icon";

import EditorCanvas from "../components/editorCanvas";
import CanvasButton from "../components/canvasInput/canvasButtons";
import CanvasForm from "../components/forms";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import ZoomOutIcon from "@mui/icons-material/ZoomOut";
import NoteAddIcon from "@mui/icons-material/NoteAdd";

let totalPages = 1;

export default function Home() {
  const [theme, setTheme] = useState("white");
  const [zoom, setZoom] = useState(1.5);
  const [pages, setpages] = useState([{ key: 1 }]);
  const [sectionForm, setForm] = useState(0);
  const handelZoom = (zoom) => {
    if ((zoom >= 1) & (zoom <= 3)) setZoom(zoom);
  };
  const addPages = () => {
    totalPages++;
    setpages([...pages, { key: totalPages }]);
  };

  return (
    <>
      <div className="flex flex-col w-full h-screen overflow-x-auto fixed">
        <div className="w-full min-w-[860px]">
          <nav className="w-full h-24 bg-slate-700 min-h-[6rem]">
            <button onClick={() => handelZoom(zoom + 0.5)}>
              <ZoomInIcon style={{ color: theme }} />
            </button>
            <button onClick={() => handelZoom(zoom - 0.5)}>
              <ZoomOutIcon style={{ color: theme }} />
            </button>
            <button onClick={addPages}>
              <NoteAddIcon style={{ color: theme }} />
            </button>
          </nav>
          <div className="flex flex-1 h-[calc(100vh-6rem)]">
            <div className="bg-slate-800 w-[40%] min-w-[400px] flex">
              <div>
                {sectionButtons.map((data, i) => {
                  return (
                    <CanvasButton
                      key={i}
                      Icon={data}
                      callBack={() => setForm(i+1)}
                    />
                  );
                })}
              </div>
              <div className="flex-1">{<CanvasForm index={sectionForm} />}</div>
            </div>
            <div className="bg-gray-800 flex-1 overflow-y-auto scrollbar-none scroll-smooth">
              <EditorCanvas zoomVal={zoom} pages={pages} temp={1} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
