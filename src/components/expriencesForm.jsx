import { Trash2, Plus, ChevronRight } from "lucide-react";
import { useState } from "react";

export default function ExperiencesInfo({ experiences, setExperiences }) {
  const [currentExp, setCurrentExp] = useState({
    name: "",
    title: "",
    startDate: "",
    endDate: "",
    id: crypto.randomUUID(),
  });

  const handleAddExp = () => {
    if (
      currentExp.name.trim() === "" ||
      currentExp.title.trim() === "" ||
      currentExp.startDate.trim() === "" ||
      currentExp.endDate.trim() === ""
    )
      return;
    setExperiences((prevExp) => [...prevExp, { ...currentExp }]);
    setCurrentExp({
      name: "",
      title: "",
      startDate: "",
      endDate: "",
      id: crypto.randomUUID(),
    });
  };

  const handleRemoveExp = (key) => {
    setExperiences((prevItems) =>
      prevItems.filter((item) => item.startDate !== key)
    );
  };

  return (
    <>
      <div className="input-section">
        <div>
          <h1 className="form-heading">Experiences</h1>
          <h3 className="form-caption">Add your work Experiences</h3>
        </div>
        <label className="AddSkill" htmlFor="companyName">
          Company Name
          <input
            type="text"
            name="companyName"
            value={currentExp.name}
            id="companyName"
            onChange={(e) =>
              setCurrentExp({ ...currentExp, name: e.target.value })
            }
          />
        </label>
        <label className="AddSkill" htmlFor="jobTitle">
          Job Title
          <input
            type="text"
            name="jobTitle"
            id="jobTitle"
            value={currentExp.title}
            onChange={(e) =>
              setCurrentExp({
                ...currentExp,
                title: e.target.value,
              })
            }
          />
        </label>
        <div className="twoColumnForm">
          <label htmlFor="startYearExp">
            Start Date
            <input
              type="date"
              name="startYearExp"
              id="startYearExp"
              value={currentExp.startDate}
              onChange={(e) =>
                setCurrentExp({
                  ...currentExp,
                  startDate: e.target.value,
                })
              }
            />
          </label>
          <label htmlFor="endYearExp">
            End Date
            <input
              type="date"
              name="endYearExp"
              id="endYearExp"
              value={currentExp.endDate}
              onChange={(e) =>
                setCurrentExp({
                  ...currentExp,
                  endDate: e.target.value,
                })
              }
            />
          </label>
        </div>
        <div>
          <button
            className="btn btn-primary AddObjectListBtn"
            onClick={() => handleAddExp()}
          >
            {<Plus />}Add
          </button>
        </div>

        <ul className="addremoveList educationFormList">
          {experiences.length > 0 ? (
            experiences.map((obj) => (
              <li key={obj.id}>
                <button onClick={() => handleRemoveExp(obj.startDate)}>
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
