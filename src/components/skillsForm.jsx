import { useState } from "react";
import { Trash2 } from "lucide-react";

export default function SkillsInfo({
  skills,
  setSkill,
  setAboutYou,
  language,
  setLanguage,
}) {
  const [currentSkill, setCurrentSkill] = useState("");
  const [currentLang, setCurrentLang] = useState("");

  const handleAddSkill = () => {
    if (currentSkill.trim() === "") return;
    setSkill((prevSkills) => [...prevSkills, currentSkill]);
    setCurrentSkill("");
  };

  const handleRemoveSkill = (key) => {
    setSkill((prevItems) => prevItems.filter((item) => item !== key));
  };

  const handleAddLanguage = () => {
    if (currentLang.trim() === "") return;
    setLanguage((prevSkills) => [...prevSkills, currentLang]);
    setCurrentLang("");
  };

  const handleRemoveLanguage = (key) => {
    setLanguage((prevItems) => prevItems.filter((item) => item !== key));
  };

  return (
    <>
      <div className="input-section">
        <div>
          <h1 className="form-heading">About you</h1>
          <h3 className="form-caption">Tell more about your abilities</h3>
        </div>
        <textarea
          placeholder="Explain briefly about yourself & what you can do"
          name="aboutyou"
          spellCheck="false"
          id="aboutyou"
          rows={6}
          onChange={(e) => {
            setAboutYou(e.target.value);
          }}
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
        <ul className="addremoveList">
          {skills.length > 0 ? (
            skills.map((skill) => (
              <li key={skill}>
                {
                  <button onClick={() => handleRemoveSkill(skill)}>
                    {<Trash2 size={20} color="#b90000" />}
                  </button>
                }{" "}
                {skill}
              </li>
            ))
          ) : (
            <p>Nothing Added...</p>
          )}
        </ul>

        <div>
          <h1 className="form-heading">Languages</h1>
          <h3 className="form-caption">How many languages you know?</h3>
        </div>
        <label className="AddSkill">
          <input
            type="text"
            name="AddSkill"
            id="Addlaneguage"
            value={currentLang}
            onChange={(e) => setCurrentLang(e.target.value)}
          />
          <button
            className="AddSkillButton btn"
            onClick={(e) => handleAddLanguage(e)}
          >
            Add
          </button>
        </label>
        <ul className="addremoveList">
          {language.length > 0 ? (
            language.map((lang) => (
              <li key={lang}>
                {
                  <button onClick={() => handleRemoveLanguage(lang)}>
                    {<Trash2 size={20} color="#b90000" />}
                  </button>
                }{" "}
                {lang}
              </li>
            ))
          ) : (
            <p>Nothing Added...</p>
          )}
        </ul>
      </div>
    </>
  );
}
