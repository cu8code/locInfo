import { useState, useContext } from "react";
import { jsonContext } from "../../pages";
import FormInput from "./formInput";
export default function EducationForm({type,toggle }) {
  const [data,setData] = useContext(jsonContext);

  const [name, setName] = useState("");
  const [yearStart, setStart] = useState("");
  const [yearEnd, setEnd] = useState("");
  const [degree, setDegree] = useState("");
  let copy = { ...data };
  const onSubmitClick = (type) => {
    if (type == "school") {
      let eduData = {
        name: name,
        yearStart:yearStart,
        yearEnd:yearEnd,
      };
      copy.education.school.push(eduData);
    } else {
      let eduData = {
        name: name,
        yearStart:yearStart,
        yearEnd:yearEnd,
        degree:degree,
      };
      copy.education.university.push(eduData);
    }
    setData({ ...copy });
    toggle(false);
  };

  if (type === "school") {
    return (
      <>
        <div className="w-full bg-cyan-600 text-slate-50 text-center">
          Add School
        </div>
        <FormInput val={name} setVal={setName} pHolder="school name" />
        <FormInput val={yearStart} setVal={setStart} pHolder="start year" />
        <FormInput val={yearEnd} setVal={setEnd} pHolder="end year" />
        <button className="bg-white" onClick={()=>onSubmitClick(type)}>submit</button>
      </>
    );
  } else {
    return (
      <>
        <div className="w-full bg-cyan-600 text-slate-50 text-center">
          Add University/College
        </div>
        <FormInput val={name} setVal={setName} pHolder="university name" />
        <FormInput val={yearStart} setVal={setStart} pHolder="start year" />
        <FormInput val={yearEnd} setVal={setEnd} pHolder="end year" />
        <FormInput val={degree} setVal={setDegree} pHolder="degree" />
        <button className="bg-white" onClick={()=>onSubmitClick(type)}>submit</button>
      </>
    );
  }
}
