
export default function FormInput({val,setVal,pHolder}) {
  return (
    <>
      <input placeholder={pHolder} className="text-black" type="text" value={val} onChange={e=>setVal(e.target.value)} />
    </>
  );
}
