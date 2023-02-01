import { useState } from "react";
import { useJsonContext } from "../../context/jsonContext";
import { crateEducationModal } from "../../modal/education";
import FormInput from "./formInput";
export default function EducationForm() {
  const [jsonData, setJsonData] = useJsonContext()
  const [institution, setIntuition] = useState()
  const [description, setDescription] = useState()
  const [url, setUrl] = useState([""])
  const [initYer, setIntiYer] = useState()
  const [endYer, setEenYer] = useState()

  const onSubmitClick = () => {
    setJsonData(
      jsonData.education.push(
      crateEducationModal(institution, description, url, initYer, endYer)
    ))
  }
  return (
    <>
      <div className="w-full bg-cyan-600 text-slate-50 text-center">
        Add University/College
      </div>
      <FormInput val={institution} setVal={setIntuition} pHolder="university name" />
      <FormInput val={description} setVal={setDescription} pHolder="description" />
      <FormInput val={initYer} setVal={setIntiYer} pHolder="end year" />
      <FormInput val={endYer} setVal={setEenYer} pHolder="end year" />
      <button className="bg-white" onClick={() => onSubmitClick()}>submit</button>
    </>
  )
}