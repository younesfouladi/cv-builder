import "../../styles/inputForm.css";
import PersonalInfo from "../personForm.jsx";

export default function InputForm() {
  return (
    <aside className="inputform">
      <form>
        <PersonalInfo />
        <div className="buttons-container">
          <button className="btn btn-secondary">Previous</button>
          <button className="btn btn-primary">Next</button>
        </div>
      </form>
    </aside>
  );
}
