import Education from "./sections/education";
import Profile from "./sections/profile";
import { useJsonContext } from "../../context/jsonContext";
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
const Three = ({json})=>{
  
}
export default function Templates({ num }) {
const [json,setData] = useJsonContext();
  const Temp = [<Empty />, <One json={json} />, <Two json={json} />];
  return <>{Temp[num]}</>;
}
