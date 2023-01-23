import Templates from "../template/template";

export default function Page({ pageNumber, templateNumber }) {
  return (
    <>
      <div className="bg-white w-[70mm] h-[90mm] select-none">
        {<Templates num={(pageNumber)==1?templateNumber:0} />}
      </div>
      <div className="text-slate-50 bg-slate-700 text-xs text-right h-[1rem] mt-[-0.5rem]">
        Page: {pageNumber}
      </div>
    </>
  );
}
