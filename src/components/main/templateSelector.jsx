import "../../styles/templateSidebar.css";

export default function TemplateSidebar() {
  return (
    <div className="template-sidebar">
      <h2>Template List</h2>
      <TemplateCard
        templateName={"Modern Light"}
        imgSrc={"../../images/modernLight-placeholder.jpg"}
      />
      <TemplateCard
        templateName={"Modern Dark"}
        imgSrc={"../../images/modernDark-placeholder.jpg"}
      />
    </div>
  );
}

function TemplateCard(props) {
  return (
    <div className="template-card">
      <div>
        <img src={props.imgSrc}></img>
      </div>
      <h3>{props.templateName}</h3>
    </div>
  );
}
