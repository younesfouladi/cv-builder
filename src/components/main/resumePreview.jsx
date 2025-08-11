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
  RenderResumeLanguage,
  RenderResumeEducaion,
  RenderResumeExperiences,
} from "../resumePreviewComponents.jsx";

import {
  UserRound,
  SquareUserRound,
  Settings,
  Phone,
  Mail,
  MapPin,
  Earth,
  GraduationCap,
  Briefcase,
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
  language,
  education,
  experiences,
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
        language={language}
        education={education}
        experiences={experiences}
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
  language,
  education,
  experiences,
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
        <RenderResumeAboutYou aboutYou={aboutYou} icon={<UserRound />} />

        <div className="t1-contact">
          <h2>
            <SquareUserRound />
            Contact
          </h2>
          <RenderResumeNumber number={number} icon={<Phone size={20} />} />
          <RenderResumeEmail email={email} icon={<Mail size={20} />} />
          <RenderResumeAddress address={address} icon={<MapPin size={20} />} />
        </div>
        <div className="t1-skills">
          <h2>
            <Settings />
            Skills
          </h2>
          <RenderResumeSkills skills={skills} />
        </div>
        <div className="t1-language">
          <h2>
            <Earth />
            Lanuages
          </h2>
          <RenderResumeLanguage language={language} />;
        </div>
      </div>

      <div className="t1-right">
        <div className="t1-namesection">
          <RenderResumeName name={name} />
          <RenderResumeLastName lastName={lastName} />
          <RenderResumeJobTitle jobTitle={jobTitle} />
        </div>
        <RenderResumeEducaion education={education} icon={<GraduationCap />} />
        <RenderResumeExperiences
          experiences={experiences}
          icon={<Briefcase />}
        />
      </div>
    </div>
  );
}
