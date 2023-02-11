import Page from "./pages";

export default function EditorCanvas({ zoomVal, pages, temp}) {
  return (
    <>
      <div className="w-full min-h-full h-fit flex justify-center">
        <div
          style={{ transform: `scale(${zoomVal})` }}
          className="pt-4 pb-4 w-fit h-fit flex flex-col gap-2 origin-top duration-200"
        >
          {pages.map((data) => {
            return (
              <Page key={data.key} num={data.key} temp={temp} />
            );
          })}
        </div>
      </div>
    </>
  );
}
