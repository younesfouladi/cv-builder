import { useState } from "react";

export default function SkillsInfo() {
  const [skills, setSkill] = useState([]);
  const [currentSkill, setCurrentSkill] = useState("");

  const handleAddSkill = () => {
    if (currentSkill.trim() === "") return;
    setSkill((prevSkills) => [...prevSkills, currentSkill]);
    setCurrentSkill("");
  };

  return (
    <>
      <div>
        <h1 className="form-heading">About you</h1>
        <h3 className="form-caption">Tell more about your abilities</h3>
      </div>
      <div className="input-section">
        <textarea
          placeholder="Explain briefly about yourself & what you can do"
          name="aboutyou"
          id="aboutyou"
          rows={6}
        ></textarea>
        <div>
          <h1 className="form-heading">Skills</h1>
          <h3 className="form-caption">Write & Add your skills</h3>
        </div>
        <label className="AddSkill">
          <input
            type="text"
            name="AddSkill"
            id="AddSkill"
            value={currentSkill}
            onChange={(e) => setCurrentSkill(e.target.value)}
          />
          <button
            className="AddSkillButton btn"
            onClick={(e) => handleAddSkill(e)}
          >
            Add
          </button>
        </label>
        <ul className="FormSkillList">
          {skills.length > 0 ? (
            skills.map((skill, index) => <li key={index}>{skill}</li>)
          ) : (
            <p>Nothing Added...</p>
          )}
        </ul>
      </div>
    </>
  );
}
