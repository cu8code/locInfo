export default function CanvasButton({ Icon, callBack }) {
  return (
    <>
      <div onClick={callBack} className="w-[45px] p-1 flex justify-center">
        {<Icon style={{ color: "white", fontSize: "26px" }} />}
      </div>
    </>
  );
}
