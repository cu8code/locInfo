import jsPDF from "jspdf";
import { useEffect, useRef } from "react";
import { useJsonContext } from "../../context/jsonContext";

export default function Page({ num, temp }) {
  const jsonContext  = useJsonContext()
  const ref = useRef(null)
  useEffect(() => {
    const doc = new jsPDF()
    doc.text("lol", 10, 10)
    const a = doc.output("dataurlstring")
    ref.current.data = a
  }, [])
  return (
    <>
      <object
        ref={ref}
        style={{
          width: "210mm",
          height: "297mm"
        }}
      />
    </>
  );
}
