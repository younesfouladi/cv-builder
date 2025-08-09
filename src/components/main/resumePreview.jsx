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
    <div className="ResumePreview">
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
    <>
      <div>
        <RenderResumePicture />
      </div>
      <div>
        <RenderResumeName />
        <RenderResumeLastName />
        <RenderResumeJobTitle />
      </div>
      <div>
        <div>
          <RenderResumeNumber />
          <RenderResumeEmail />
          <RenderResumeAddress />
        </div>
      </div>
    </>
  );
}
