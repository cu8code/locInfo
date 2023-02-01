import { useEffect } from "react";
import { useJsonContext } from "../../../context/jsonContext";

export default function ClassicTemplate() {
  const [json, setJson] = useJsonContext();

  useEffect(() => {
    console.log(json)
  },[json,setJson])

  return (<>
    <div>
      <div>
        <h1>{json.name}</h1>
        <h3>{json.headline}</h3>
      </div>
      <div>{json.city} {json.country}</div>
      <div>{json.email} {json.phoneNumber}</div>
    </div>
    <div>
      <div><a href={`https://twitter.com/${json.twitter}`}>{json.twitter}</a></div>
      <div><a href={`https://github.com/${json.github}`}>{json.twitter}</a></div>
    </div>

    <div>{json.description}</div>

    <div />

    <div>
      <b>Education</b>

    </div>

    <div>
      <b>Work Experience</b>

    </div>

    <div>
      <b>Sills</b>
    </div>

    <div>
      <b>Interests</b>
    </div>

    <div>
      <b>Langrage</b>
    </div>

    <div>
      <b>Volunteer Experience</b>
    </div>

    <div>
      <b>References</b>
    </div>

  </>)
}
