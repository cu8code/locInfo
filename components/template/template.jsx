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
      <div>template 1</div>
      <Profile json={json}/>
      <div className="bg-red-400">
        <Education education={json["education"]} />
      </div>
    </>
  );
};
const Two = ({ json }) => {
  return (
    <>
      <div>template 2</div>
      <Profile/>
      <div className="bg-yellow-200">
        <Education education={json["education"]} />
      </div>
    </>
  );
};
export function useJsonContext(){
  return useContext(jsonContext)
}

export default function Templates({ num }) {
const json = useJsonContext();
  const Temp = [<Empty />, <One json={json} />, <Two json={json} />];
  return <>{Temp[num]}</>;
}
