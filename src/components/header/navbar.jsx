import "../../styles/navbar.css";
import { Printer } from "lucide-react";
import "../../styles/resumePreview.css";
import { useReactToPrint } from "react-to-print";

export default function Navbar({ contentRef }) {
  return (
    <nav className="navbar">
      <Logo />
      <BreadCrumb />
      <PrintButton contentRef={contentRef} />
    </nav>
  );
}

function Logo() {
  return (
    <span className="site-logo">
      <img src="../../images/navbarLogo.png" />
      <a href="">CV Builder</a>
    </span>
  );
}

function BreadCrumb() {
  return (
    <div className="breadcrumb">
      <a className="breadcrumb-item">Personal information</a>
      <a className="breadcrumb-item">Skills</a>
      <a className="breadcrumb-item">Education</a>
      <a className="breadcrumb-item">Expriences</a>
    </div>
  );
}

function PrintButton({ contentRef }) {
  const handlePrint = useReactToPrint({ contentRef });
  return (
    <button className="printerIcon" onClick={handlePrint}>
      <Printer color="#1476e4" size={28} />
    </button>
  );
}
