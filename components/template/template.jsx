import Education from "./sections/education";

const Empty = () => {
  return <></>;
};

const One = ({ json }) => {
  return (
    <>
      <div>template 1</div>
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
      <div className="bg-yellow-200">
        <Education education={json["education"]} />
      </div>
    </>
  );
};
export default function Templates({ json, num }) {
  const Temp = [<Empty />, <One json={json} />, <Two json={json} />];
  return <>{Temp[num]}</>;
}
