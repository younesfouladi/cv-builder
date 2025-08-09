import "../../styles/inputForm.css";
import PersonalInfo from "../personForm.jsx";
import SkillsInfo from "../skillsForm.jsx";

export default function InputForm({
  setName,
  setLastName,
  setJobTitle,
  setEmail,
  setNumber,
  setAddress,
  setSkill,
  skills,
  setAboutYou,
}) {
  return (
    <aside className="inputform">
      <form onSubmit={(e) => e.preventDefault()}>
        <PersonalInfo
          setName={setName}
          setLastName={setLastName}
          setJobTitle={setJobTitle}
          setEmail={setEmail}
          setNumber={setNumber}
          setAddress={setAddress}
        />
        <SkillsInfo
          skills={skills}
          setSkill={setSkill}
          setAboutYou={setAboutYou}
        />
        <div className="buttons-container">
          <button className="btn btn-secondary">Previous</button>
          <button className="btn btn-primary">Next</button>
        </div>
      </form>
    </aside>
  );
}
