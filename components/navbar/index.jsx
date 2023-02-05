import ZoomInIcon from "@mui/icons-material/ZoomIn";
import ZoomOutIcon from "@mui/icons-material/ZoomOut";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import jsPDF from "jspdf";


const heading = ""

function generateHTML(template = 0) {
  return `
  <div style=${heading}>Anakn</div>
  `
}

function save() {
  const template = 0
  const download = true
  const doc = new jsPDF()
  doc.html(generateHTML(), {
    callback: () => { download ? doc.save(template) : "" }
  })
}

export default function Navbar({ zoom, fn1, fn2, theme }) {
  return (
    <>
      <nav className="w-full h-24 bg-slate-700 min-h-[6rem]">
        <button onClick={() => fn1(zoom + 0.5)}>
          <ZoomInIcon style={{ color: theme }} />
        </button>
        <button onClick={() => fn1(zoom - 0.5)}>
          <ZoomOutIcon style={{ color: theme }} />
        </button>
        <button onClick={fn2}>
          <NoteAddIcon style={{ color: theme }} />
        </button>
        <button onClick={() => { save() }}>
          {"save"}
        </button>
      </nav>
    </>
  );
}
