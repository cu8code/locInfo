import ZoomInIcon from "@mui/icons-material/ZoomIn";
import ZoomOutIcon from "@mui/icons-material/ZoomOut";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import useSelectTemplateContext from "../../context/selectTemplate";
import { useEffect, useRef } from "react";
export default function Navbar({ zoom, handelZoom, addPages, theme }) {
  const template1 = useRef(null)
  const [templateValue, setTemplateValue] = useSelectTemplateContext()
  useEffect(() => {
    setTemplateValue(1)
    console.log(templateValue);
  }, [])
  return (
    <>
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
        <button ref={template1}>Select Template 1</button>
      </nav>
    </>
  );
}
