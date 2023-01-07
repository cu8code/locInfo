import ZoomInIcon from "@mui/icons-material/ZoomIn";
import ZoomOutIcon from "@mui/icons-material/ZoomOut";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
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
      </nav>
    </>
  );
}
