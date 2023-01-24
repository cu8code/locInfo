export default function ClassicTemplate({ json }) {
  return (<>
    <div>
      <div>
        <h1>{json.name}</h1>
        <h3>{json.headline}</h3>
      </div>
      <div>{json.city},{json.contry}</div>
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
      {json.education.map((e, i) => {
        return <div key={i}>
          {e.institution}
          {e.degree}
          {e.areaOfStudy}
          {e.degree}
          {e.grade}
          {e.startDate}
          {e.endDate}
          {e.website}
          {e.summary}
        </div>
      })}
    </div>

    <div>
      <b>Work Experience</b>
      {json.education.map((e, i) => {
        return <div key={i}>
          {e.name}
          {e.position}
          {e.startDate}
          {e.endDate}
          {e.website}
          {e.summary}
        </div>
      })}
    </div>

    <div>
      <b>Sills</b>
    </div>

    <div>
      <b>Interests</b>
    </div>

    <div>
      <b>Laungage</b>
    </div>

    <div>
      <b>Volunteer Experience</b>
    </div>

    <div>
      <b>References</b>
    </div>

  </>)
}
