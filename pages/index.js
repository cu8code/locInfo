import { useState, createContext, useEffect } from "react";
import EditorCanvas from "../components/editorCanvas";
import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";
import { TemplateContext } from "../context/selectTemplate";
import { JsonContext } from "../context/jsonContext";

let totalPages = 1;
export const jsonContext = createContext(null);

export default function Home() {
  const [jsonData, setData] = useState({
    profile: {
      img: "",
      name: "",
    },
    education: {
      school: [],
      university: [],
    },
    workExperience: [],
  });
  const [theme, setTheme] = useState("white");
  const [zoom, setZoom] = useState(1.5);
  const [pages, setpages] = useState([{ key: 1 }]);
  const handelZoom = (zoom) => {
    if ((zoom >= 1) & (zoom <= 3)) setZoom(zoom);
  };
  const addPages = () => {
    totalPages++;
    setpages([...pages, { key: totalPages }]);
  };

  return (
    <>
      <TemplateContext>
        <JsonContext>
          <div className="flex w-full h-screen overflow-x-auto fixed">
            <div className="flex w-full min-w-[860px]">
              <div className="flex flex-1 h-full]">
                <Sidebar />
                <div className="bg-[#909090] flex-1 overflow-y-auto scrollbar-none scroll-smooth">
                  <EditorCanvas zoomVal={zoom} pages={pages} temp={2} />
                  <div className="flex justify-center absolute bottom-11 w-[calc(100vw-450px)] min-w-[410px] z-10">
                    <Navbar
                      zoom={zoom}
                      fn1={handelZoom}
                      fn2={addPages}
                      theme={theme}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </JsonContext>
      </TemplateContext>
    </>
  );
}
