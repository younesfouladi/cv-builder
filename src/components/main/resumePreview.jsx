import "../../styles/resumePreview.css";
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
  const container = document.querySelector(".ResumePreview");
  container.classList.add("templateOne");

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
