import "../../styles/resumePreview.css";
import { useEffect } from "react";
import {
  RenderResumePicture,
  RenderResumeAddress,
  RenderResumeEmail,
  RenderResumeJobTitle,
  RenderResumeName,
  RenderResumeNumber,
  RenderResumeLastName,
  RenderResumeAboutYou,
  RenderResumeSkills,
} from "../resumePreviewComponents.jsx";

import {
  UserRound,
  SquareUserRound,
  Settings,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

export default function ResumePreview({
  name,
  lastName,
  jobTitle,
  email,
  number,
  address,
  aboutYou,
  skills,
}) {
  return (
    <div className="resumePreview">
      <TemplateOne
        name={name}
        lastName={lastName}
        jobTitle={jobTitle}
        email={email}
        number={number}
        address={address}
        aboutYou={aboutYou}
        skills={skills}
      />
    </div>
  );
}

function TemplateOne({
  name,
  lastName,
  jobTitle,
  email,
  number,
  address,
  aboutYou,
  skills,
}) {
  useEffect(() => {
    const container = document.querySelector(".ResumePreview");
    if (container) container.classList.add("template1");
  });
  return (
    <div className="t1">
      <div className="t1-left">
        <div className="backdrop"> </div>
        <RenderResumePicture />
        <div className="t1-about">
          <h2>
            <UserRound /> About Me
          </h2>
          <RenderResumeAboutYou aboutYou={aboutYou} />
        </div>
        <div className="t1-contact">
          <h2>
            <SquareUserRound />
            Contact
          </h2>
          <span>
            <Phone size={20} />
            <RenderResumeNumber number={number} />
          </span>
          <span>
            <MapPin size={20} />
            <RenderResumeEmail email={email} />
          </span>
          <span>
            <Mail size={20} />
            <RenderResumeAddress address={address} />
          </span>
        </div>
        <div className="t1-skills">
          <h2>
            <Settings />
            Skills
          </h2>
          <RenderResumeSkills skills={skills} />
        </div>
        <div className="t1-language"></div>
      </div>

      <div className="t1-right">
        <div className="t1-namesection">
          <RenderResumeName name={name} />
          <RenderResumeLastName lastName={lastName} />
          <RenderResumeJobTitle jobTitle={jobTitle} />
        </div>
      </div>
    </div>
  );
}
