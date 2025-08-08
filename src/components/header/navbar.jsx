import "../../styles/navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Logo />
      <BreadCrumb />
    </nav>
  );
}

function Logo() {
  return (
    <span className="site-logo">
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
