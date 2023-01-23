import { useState,useContext,useEffect } from "react";
import { jsonContext } from "../../pages";
import FormInput from "./formInput";
export default function ProfileForm() {
  const [data,setData]=useContext(jsonContext);
  const [name,setName]=useState("");
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
