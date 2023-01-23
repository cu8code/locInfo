import Education from "./sections/education";
import Profile from "./sections/profile";
import { useContext } from "react";
import { jsonContext } from "../../pages";
const Empty = () => {
  return <></>;
};

const One = ({ json }) => {
  return (
    <>
      <Profile json={json.profile}/>
      <div className="bg-red-400">
        <Education education={json["education"]} />
      </div>
    </>
  );
};
const Two = ({ json }) => {
  return (
    <>
      <Profile json={json.profile}/>
      <div className="bg-yellow-200">
        <Education education={json["education"]} />
      </div>
    </>
  );
};
export default function Templates({ num }) {
const [json,setData] = useContext(jsonContext);
  const Temp = [<Empty />, <One json={json} />, <Two json={json} />];
  return <>{Temp[num]}</>;
}
