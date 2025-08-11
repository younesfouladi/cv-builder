export function RenderResumePicture() {
  return (
    <div className="resume-picture">
      <img src={"../../images/person.jpg"} alt="Person Picture" />
    </div>
  );
}

export function RenderResumeAddress({ address, icon }) {
  if (address.trim() !== "" && address.trim() !== null) {
    return (
      <span>
        {icon}
        <p className="resume-address">{address}</p>
      </span>
    );
  }
}

export function RenderResumeEmail({ email, icon }) {
  if (email.trim() !== "" && email.trim() !== null) {
    return (
      <span>
        {icon}
        <p className="resume-email">{email}</p>
      </span>
    );
  }
}

export function RenderResumeNumber({ number, icon }) {
  if (number.trim() !== "" && number.trim() !== null) {
    return (
      <span>
        {icon}
        <p className="resume-number">{number}</p>
      </span>
    );
  }
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

export function RenderResumeAboutYou({ aboutYou, icon }) {
  if (aboutYou.trim() !== "" && aboutYou.trim() !== null) {
    return (
      <div className="aboutme">
        <h2>{icon} About Me</h2>
        <p className="resume-aboutyou">{aboutYou}</p>
      </div>
    );
  }
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

export function RenderResumeLanguage({ language }) {
  return (
    <ul className="FormSkillList">
      {language.length > 0
        ? language.map((lang, index) => <li key={index}>{lang}</li>)
        : null}
    </ul>
  );
}

export function RenderResumeEducaion({ education }) {
  if (education.length > 0)
    return (
      <div className="resume-education">
        <h2>Education</h2>
        {education.map((item) => (
          <ul key={item.id}>
            <li>{item.title}</li>
            <li>{item.name}</li>
            <li>
              {new Date(item.startDate).getFullYear()}
              {" - "}
              {new Date(item.endDate).getFullYear()}
            </li>
          </ul>
        ))}
      </div>
    );
}

export function RenderResumeExperiences({ experiences }) {
  if (experiences.length > 0)
    return (
      <div className="resume-education">
        <h2>Experiences</h2>
        {experiences.map((item) => (
          <ul key={item.id}>
            <li>{item.title}</li>
            <li>{item.name}</li>
            <li>
              {new Date(item.startDate).getFullYear()}
              {" - "}
              {new Date(item.endDate).getFullYear()}{" "}
              <strong>({convertDay(item.startDate, item.endDate)})</strong>
            </li>
          </ul>
        ))}
      </div>
    );
}

function convertDay(start, end) {
  const days = (new Date(end) - new Date(start)) / (1000 * 60 * 60 * 24);
  const averageDaysInMonth = 30;
  const months = Math.floor(days / averageDaysInMonth);
  const remainingDays = days % averageDaysInMonth;

  if (months === 0) {
    return `${remainingDays} Days`;
  } else {
    return `${months} Months`;
  }
}
