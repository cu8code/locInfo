import EditorCanvas from "../components/editorCanvas"

export default function Home() {
  return (
    <>
      <EditorCanvas maxZoom={2} minZoom={0.3} />
    </>
  )
}
