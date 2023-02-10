import { useState, useContext } from "react";
import { useJsonContext } from "../../context/jsonContext";
import FormInput from "./formInput";
export default function EducationForm({ type, toggle }) {
  const [data, setData] = useJsonContext();

  const [name, setName] = useState("");
  const [yearStart, setStart] = useState("");
  const [yearEnd, setEnd] = useState("");
  const [degree, setDegree] = useState("");
  let copy = { ...data };
  const onSubmitClick = (type) => {
    if (type == "school") {
      let eduData = {
        name: name,
        yearStart: yearStart,
        yearEnd: yearEnd,
      };
      copy.education.school.push(eduData);
    } else {
      let eduData = {
        name: name,
        yearStart: yearStart,
        yearEnd: yearEnd,
        degree: degree,
      };
      copy.education.university.push(eduData);
    }
    setData({ ...copy });
    toggle(false);
  };

  if (type === "school") {
    return (
      <>
        <div className="flex flex-col h-full">
          <div className="w-full bg-[#305688cc] text-slate-50 text-center">
            Add School
          </div>
          <FormInput val={name} setVal={setName} pHolder="school name" />
          <FormInput val={yearStart} setVal={setStart} pHolder="start year" />
          <FormInput val={yearEnd} setVal={setEnd} pHolder="end year" />
          <div className="flex justify-center p-2 flex-1 items-center">
            <button
              className="bg-white text-black pt-1 pb-1 pl-4 pr-4 rounded h-fit"
              onClick={() => onSubmitClick(type)}
            >
              submit
            </button>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="flex flex-col h-full">
          <div className="w-full bg-[#305688cc] text-slate-50 text-center pt-2 pb-2">
            Add University/College
          </div>
          <FormInput val={name} setVal={setName} pHolder="university name" />
          <FormInput val={yearStart} setVal={setStart} pHolder="start year" />
          <FormInput val={yearEnd} setVal={setEnd} pHolder="end year" />
          <FormInput val={degree} setVal={setDegree} pHolder="degree" />
          <div className="flex justify-center p-2 flex-1 items-center">
            <button
              className="bg-white text-black pt-1 pb-1 pl-4 pr-4 rounded h-fit"
              onClick={() => onSubmitClick(type)}
            >
              submit
            </button>
          </div>
        </div>
      </>
    );
  }
}
