import "../../styles/navbar.css";
import { Printer } from "lucide-react";
import "../../styles/resumePreview.css";
import { useReactToPrint } from "react-to-print";
import { useState } from "react";

export default function Navbar({ contentRef, isActive, setIsActive }) {
  return (
    <nav className="navbar">
      <Logo />
      <BreadCrumb isActive={isActive} setIsActive={setIsActive} />
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

function BreadCrumb({ isActive, setIsActive }) {
  const breadClass = (numberOfBread) => {
    if (isActive === numberOfBread) {
      return `breadcrumb-item isActive`;
    } else {
      return `breadcrumb-item`;
    }
  };

  return (
    <div className="breadcrumb">
      <a className={breadClass(0)} onClick={() => setIsActive(0)}>
        Personal information
      </a>
      <a className={breadClass(1)} onClick={() => setIsActive(1)}>
        Skills
      </a>
      <a className={breadClass(2)} onClick={() => setIsActive(2)}>
        Education
      </a>
      <a className={breadClass(3)} onClick={() => setIsActive(3)}>
        Expriences
      </a>
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
