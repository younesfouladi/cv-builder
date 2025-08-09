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
} from "../resumePreviewComponents.jsx";

export default function ResumePreview() {
  return (
    <div className="resumePreview">
      <TemplateOne />
    </div>
  );
}

function TemplateOne() {
  useEffect(() => {
    const container = document.querySelector(".ResumePreview");
    if (container) container.classList.add("template1");
  });
  return (
    <div className="t1">
      <div className="t1-left">
        <div className="backdrop"> </div>
        <RenderResumePicture />
        <div className="t1-about"></div>
        <div className="t1-contact">
          <RenderResumeNumber />
          <RenderResumeEmail />
          <RenderResumeAddress />
        </div>
        <div className="t1-skills"></div>
        <div className="t1-language"></div>
      </div>

      <div className="t1-right">
        <div className="t1-namesection">
          <RenderResumeName />
          <RenderResumeLastName />
          <RenderResumeJobTitle />
        </div>
      </div>
    </div>
  );
}
