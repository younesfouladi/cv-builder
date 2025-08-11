import "../../styles/templateSidebar.css";

export default function TemplateSidebar({ setActiveTemplate, activeTemplate }) {
  return (
    <div className="template-sidebar">
      <h2>Template List</h2>
      <TemplateCard
        templateName={"Modern Light"}
        imgSrc={"../../images/modernLight-placeholder.jpg"}
        activeNumber={0}
        activeTemplate={activeTemplate}
        setActiveTemplate={setActiveTemplate}
      />
      <TemplateCard
        templateName={"Modern Dark"}
        imgSrc={"../../images/modernDark-placeholder.jpg"}
        activeNumber={1}
        activeTemplate={activeTemplate}
        setActiveTemplate={setActiveTemplate}
      />
    </div>
  );
}

function TemplateCard(props) {
  const cardClass = () => {
    const active =
      props.activeTemplate === props.activeNumber ? "isActive" : null;
    return `${active} template-card`;
  };

  return (
    <div
      className={cardClass()}
      onClick={() => {
        props.setActiveTemplate(props.activeNumber);
      }}
    >
      <div>
        <img src={props.imgSrc}></img>
      </div>
      <h3>{props.templateName}</h3>
    </div>
  );
}
