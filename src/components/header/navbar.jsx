import "../../styles/navbar.css";
import { Printer } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Logo />
      <BreadCrumb />
      <PrintButton />
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
      <a className="breadcrumb-item">Expriences</a>
      <a className="breadcrumb-item">Education</a>
    </div>
  );
}

function PrintButton() {
  return (
    <button className="printerIcon">
      <Printer color="#1476e4" size={28} />
    </button>
  );
}
