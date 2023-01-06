export default function CanvasButton({ Icon, callBack }) {
  return (
    <>
      <div onClick={callBack} className="w-[60px] pt-3 pb-3 pr-5 pl-5 flex justify-center">
        {<Icon style={{ color: "white", fontSize: "26px" }} />}
      </div>
    </>
  );
}
