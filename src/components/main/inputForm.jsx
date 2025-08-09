import "../../styles/inputForm.css";
import PersonalInfo from "../personForm.jsx";
import SkillsInfo from "../skillsForm.jsx";

export default function InputForm() {
  return (
    <aside className="inputform">
      <form onSubmit={(e) => e.preventDefault()}>
        <PersonalInfo />
        <SkillsInfo />
        <div className="buttons-container">
          <button className="btn btn-secondary">Previous</button>
          <button className="btn btn-primary">Next</button>
        </div>
      </form>
    </aside>
  );
}
