import { useState, useEffect } from "react";
import { useJsonContext } from "../../context/jsonContext";
import FormInput from "./formInput";
export default function ProfileForm() {
  const [json, setJson] = useJsonContext();
  const [name, setName] = useState(json.name);
  
  useEffect(() => {
    json.name = name
    setJson(json)
  }, [name,json,setJson]);

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
