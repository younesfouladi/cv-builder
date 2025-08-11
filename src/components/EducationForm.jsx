import { Trash2, Plus, ChevronRight } from "lucide-react";
import { useState } from "react";

export default function EducationInfo({ education, setEducation }) {
  const [currentEducation, setCurrentEducation] = useState({
    name: "",
    title: "",
    startDate: "",
    endDate: "",
    id: crypto.randomUUID(),
  });

  const handleAddEdu = () => {
    if (
      currentEducation.name.trim() === "" ||
      currentEducation.title.trim() === "" ||
      currentEducation.startDate.trim() === "" ||
      currentEducation.endDate.trim() === ""
    )
      return;
    setEducation((prevEdu) => [...prevEdu, { ...currentEducation }]);
    setCurrentEducation({
      name: "",
      title: "",
      startDate: "",
      endDate: "",
      id: crypto.randomUUID(),
    });
  };

  const handleRemoveEdu = (key) => {
    setEducation((prevItems) =>
      prevItems.filter((item) => item.startDate !== key)
    );
  };

  return (
    <>
      <div className="input-section">
        <div>
          <h1 className="form-heading">Education</h1>
          <h3 className="form-caption">Add your Education's History</h3>
        </div>
        <label className="AddSkill" htmlFor="UnivercityName">
          Univercity Name
          <input
            type="text"
            name="AddSkill"
            value={currentEducation.name}
            id="UnivercityName"
            onChange={(e) =>
              setCurrentEducation({ ...currentEducation, name: e.target.value })
            }
          />
        </label>
        <label className="AddSkill" htmlFor="sutdyField">
          Field of study
          <input
            type="text"
            name="sutdyField"
            id="sutdyField"
            value={currentEducation.title}
            onChange={(e) =>
              setCurrentEducation({
                ...currentEducation,
                title: e.target.value,
              })
            }
          />
        </label>
        <div className="twoColumnForm">
          <label htmlFor="startYearEdu">
            Start Date
            <input
              type="date"
              name="startYearEdu"
              id="startYearEdu"
              value={currentEducation.startDate}
              onChange={(e) =>
                setCurrentEducation({
                  ...currentEducation,
                  startDate: e.target.value,
                })
              }
            />
          </label>
          <label htmlFor="endYearEdu">
            End Date
            <input
              type="date"
              name="endYearEdu"
              id="endYearEdu"
              value={currentEducation.endDate}
              onChange={(e) =>
                setCurrentEducation({
                  ...currentEducation,
                  endDate: e.target.value,
                })
              }
            />
          </label>
        </div>
        <div>
          <button
            className="btn btn-primary AddObjectListBtn"
            onClick={() => handleAddEdu()}
          >
            {<Plus />}Add
          </button>
        </div>

        <ul className="addremoveList educationFormList">
          {education.length > 0 ? (
            education.map((obj) => (
              <li key={obj.id}>
                <button onClick={() => handleRemoveEdu(obj.startDate)}>
                  {<Trash2 size={20} color="#b90000" />}
                </button>
                {obj.name}
                <ChevronRight />
                <span>
                  <strong>{obj.title}</strong>
                </span>
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
