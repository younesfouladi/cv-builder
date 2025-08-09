import "../../styles/resumePreview.css";
import { useEffect } from "react";
import {
  RenderResumePicture,
  RenderResumeAddress,
  RenderResumeEmail,
  RenderResumeJobTitle,
  RenderResumeName,
  RenderResumeNumber,
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
    if (container) container.classList.add("templateOne");
  });
  return (
    <>
      <div>
        <RenderResumePicture />
        <div>
          <RenderResumeNumber />
          <RenderResumeEmail />
          <RenderResumeAddress />
        </div>
      </div>
      <RenderResumeName />
      <RenderResumeJobTitle />
    </>
  );
}
