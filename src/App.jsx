import { useState, useRef } from "react";
import "./App.css";
import Navbar from "./components/header/navbar.jsx";
import InputForm from "./components/main/inputForm.jsx";
import ResumePreview from "./components/main/resumePreview.jsx";
import TemplateSidebar from "./components/main/templateSelector.jsx";

function App() {
  const [isActive, setIsActive] = useState(0);
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");
  const [skills, setSkill] = useState([]);
  const [aboutYou, setAboutYou] = useState("");
  const [language, setLanguage] = useState([]);
  const [education, setEducation] = useState([]);
  const [experiences, setExperiences] = useState([]);
  const [activeTemplate, setActiveTemplate] = useState(0);
  const contentRef = useRef(null);

  return (
    <div className="container">
      <Navbar
        contentRef={contentRef}
        isActive={isActive}
        setIsActive={setIsActive}
      />
      <InputForm
        setName={setName}
        setLastName={setLastName}
        setJobTitle={setJobTitle}
        setEmail={setEmail}
        setNumber={setNumber}
        setAddress={setAddress}
        setSkill={setSkill}
        skills={skills}
        setAboutYou={setAboutYou}
        language={language}
        setLanguage={setLanguage}
        education={education}
        setEducation={setEducation}
        experiences={experiences}
        setExperiences={setExperiences}
        isActive={isActive}
        setIsActive={setIsActive}
      />

      <ResumePreview
        name={name}
        lastName={lastName}
        jobTitle={jobTitle}
        email={email}
        number={number}
        address={address}
        aboutYou={aboutYou}
        skills={skills}
        language={language}
        education={education}
        experiences={experiences}
        contentRef={contentRef}
        activeTemplate={activeTemplate}
      />
      <TemplateSidebar
        activeTemplate={activeTemplate}
        setActiveTemplate={setActiveTemplate}
      />
    </div>
  );
}

export default App;
