import { useState, useEffect } from "react";
import { useJsonContext } from "../../context/jsonContext";
import FormInput from "./formInput";
export default function ProfileForm() {
  const [data, setData] = useJsonContext();
  const [name, setName] = useState("");
  
  useEffect(() => {
    let copy = { ...data };
    copy.profile.name = name;
    setData({ ...copy });
  }, [name,data,setData]);
  return (
    <>
      <div>
        <div className="w-full bg-cyan-600 text-slate-50 text-center">
          profile
        </div>
        <div className="text-white">
          Name:
          <FormInput val={name} setVal={setName} pHolder="name" />
        </div>
      </div>
    </>
  );
}
