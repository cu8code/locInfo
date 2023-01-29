import { useState, createContext } from "react";
import EditorCanvas from "../components/editorCanvas";
import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";

import { TemplateContext } from "../context/templateContext";
import { JsonContext } from "../context/jsonContext";


export default function Home() {
  const [theme, setTheme] = useState("white");
  const [zoom, setZoom] = useState(1.5);
  const [pages, setpages] = useState([{ key: 1 }]);
  const handelZoom = (zoom) => {
    if ((zoom >= 1) & (zoom <= 3)) setZoom(zoom);
  };
  const addPages = () => {
    setpages([...pages, { key: pages.length + 1 }]);
  };

  return (
    <>
      <TemplateContext>
        <JsonContext>
          <div className="flex flex-col w-full h-screen overflow-x-auto fixed">
            <div className="w-full min-w-[860px]">
              <Navbar
                zoom={zoom}
                handelZoom={handelZoom}
                addPages={addPages}
                theme={theme}
              />
              <div className="flex flex-1 h-[calc(100vh-6rem)]">
                <Sidebar />
                <div className="bg-gray-800 flex-1 overflow-y-auto scrollbar-none scroll-smooth">
                  <EditorCanvas
                    zoomVal={zoom}
                    pageList={pages}
                    tempNumber={2}
                  />
                </div>
              </div>
            </div>
          </div>
        </JsonContext>
      </TemplateContext>
    </>
  );
}
