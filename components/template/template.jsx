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
export default function Templates({ num: PageNumber }) {
const [json,setData] = useJsonContext();
  const Temp = [<Empty key={1} />, <One json={json} key={2}/>, <Two json={json} key={3}/>];
  return <>{Temp[PageNumber]}</>;
}
