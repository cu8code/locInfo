import Templates from "../template/template";

export default function Page({ num, temp }) {
  return (
    <>
      <div className="bg-white w-[70mm] h-[90mm] select-none">
        {<Templates num={(num)==1?temp:0} />}
      </div>
      <div className="text-slate-50 bg-slate-700 text-xs text-right h-[1rem] mt-[-0.5rem]">
        Page: {num}
      </div>
    </>
  );
}
