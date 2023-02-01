import Education from "./sections/education";
import Profile from "./sections/profile";
import { useJsonContext } from "../../context/jsonContext";
import ClassicTemplate from "./templates/classic";
const Empty = ({ json }) => {
  return <>
    <Profile json={json.profile} />
  </>;
};

const One = ({ json }) => {
  return (
    <>
      <Profile json={json.profile} />
      <div className="bg-red-400">
        <Education education={json["education"]} />
      </div>
    </>
  );
};

const Two = ({ json }) => {
  return (
    <>
      <Profile json={json.profile} />
      <h1>Tow</h1>
      <div className="bg-yellow-200">
        <Education education={json["education"]} />
      </div>
    </>
  );
};

export default function Templates({ templateNumber }) {
  const [json, setData] = useJsonContext();
  const Temp = [<ClassicTemplate json={json} key={1} />, <One json={json} key={2} />, <Two json={json} key={3} />];
  return <>{Temp[templateNumber]}</>;
}
