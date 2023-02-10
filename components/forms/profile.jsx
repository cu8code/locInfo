import { useState, useEffect } from "react";
import { useJsonContext } from "../../context/jsonContext";
import FormInput from "./formInput";
export default function ProfileForm() {
  const [data, setData] = useJsonContext();
  const [name, setName] = useState("");
  const changeName = () => {
    let copy = { ...data };
    copy.profile.name = name;
    setData({ ...copy });
  };
  useEffect(() => {
    changeName();
  }, [name]);
  return (
    <>
      <div>
        <div className="w-full bg-[#305688cc] text-slate-50 text-center">
          profile
        </div>
        <div className="text-white">
          <FormInput val={name} setVal={setName} pHolder="Full Name" />
        </div>
      </div>
    </>
  );
}
