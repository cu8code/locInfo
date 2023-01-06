const School = ({ name, start, end }) => {
  return (
    <>
      <div>{name}</div>
      <div>
        {start}-{end}
      </div>
    </>
  );
};
const University = ({ name, start, end, degree }) => {
  return (
    <>
      <div>{name}</div>
      <div>
        {start}-{end}
      </div>
      <div>{degree}</div>
    </>
  );
};
export default function Education({ education }) {
  return (
    <>
      <div>
        {education.school.map((data, i) => {
          return (
            <School
              key={i}
              name={data.name}
              start={data.yearStart}
              end={data.yearEnd}
            />
          );
        })}
      </div>
      <div>
        {education.university.map((data, i) => {
          return (
            <University
              key={i}
              name={data.name}
              start={data.yearStart}
              end={data.yearEnd}
              degree={data.degree}
            />
          );
        })}
      </div>
    </>
  );
}
