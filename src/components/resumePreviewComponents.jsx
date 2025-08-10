export function RenderResumePicture() {
  return (
    <div className="resume-picture">
      <img src={"../../images/person.jpg"} alt="Person Picture" />
    </div>
  );
}

export function RenderResumeAddress({ address }) {
  return <p className="resume-address">{address}</p>;
}

export function RenderResumeEmail({ email }) {
  return <p className="resume-email">{email}</p>;
}

export function RenderResumeNumber({ number }) {
  return <p className="resume-number">{number}</p>;
}

export function RenderResumeName({ name }) {
  return <h1 className="resume-name">{name}</h1>;
}

export function RenderResumeLastName({ lastName }) {
  return <h1 className="resume-lastname">{lastName}</h1>;
}

export function RenderResumeJobTitle({ jobTitle }) {
  return <h2 className="resume-jobtitle">{jobTitle}</h2>;
}

export function RenderResumeAboutYou({ aboutYou }) {
  return <p className="resume-aboutyou">{aboutYou}</p>;
}

export function RenderResumeSkills({ skills }) {
  return (
    <ul className="FormSkillList">
      {skills.length > 0
        ? skills.map((skill, index) => <li key={index}>{skill}</li>)
        : null}
    </ul>
  );
}
