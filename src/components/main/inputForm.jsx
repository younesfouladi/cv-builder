import { useState } from "react";
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
  const [isActive, setIsActive] = useState(0);

  const handleNextClick = () => {
    setIsActive(isActive + 1);
  };

  const handleBackClick = () => {
    setIsActive(isActive - 1);
  };

  return (
    <aside className="inputform">
      <form onSubmit={(e) => e.preventDefault()}>
        {(() => {
          switch (isActive) {
            case 0:
              return (
                <PersonalInfo
                  setName={setName}
                  setLastName={setLastName}
                  setJobTitle={setJobTitle}
                  setEmail={setEmail}
                  setNumber={setNumber}
                  setAddress={setAddress}
                />
              );
            case 1:
              return (
                <SkillsInfo
                  skills={skills}
                  setSkill={setSkill}
                  setAboutYou={setAboutYou}
                />
              );
          }
        })()}

        <div className="buttons-container">
          {isActive !== 0 ? (
            <button
              className="btn btn-secondary"
              onClick={() => {
                handleBackClick();
              }}
            >
              Back
            </button>
          ) : null}
          {isActive !== 3 ? (
            <button
              className="btn btn-primary"
              onClick={() => handleNextClick()}
            >
              Next
            </button>
          ) : null}
        </div>
      </form>
    </aside>
  );
}
