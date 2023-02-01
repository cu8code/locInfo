import { useJsonContext } from "../../context/jsonContext";
import ClassicTemplate from "./layout/classic";

export default function Templates({ templateNumber }) {
  const [json, setData] = useJsonContext();
  const Temp = [<ClassicTemplate json={json} key={1} />];
  return <>{Temp[templateNumber]}</>;
}
