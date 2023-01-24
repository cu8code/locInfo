import Page from "./pages";

export default function EditorCanvas({ zoomVal, pageList, tempNumber }) {
  return (
    <>
      <div className="w-full min-h-full h-fit flex justify-center">
        <div
          style={{ transform: `scale(${zoomVal})` }}
          className="pt-4 pb-4 w-fit h-fit flex flex-col gap-2 origin-top duration-200"
        >
            {pageList.map((data) => {
              return (
                <Page key={data.key} pageNumber={data.key} tempNumber={tempNumber} />
              );
            })}
        </div>
      </div>
    </>
  );
}
