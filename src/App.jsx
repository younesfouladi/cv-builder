import { useState } from "react";
import "./App.css";
import Navbar from "./components/header/navbar.jsx";
import InputForm from "./components/main/inputForm.jsx";
import ResumePreview from "./components/main/resumePreview.jsx";

function App() {
  return (
    <div className="container">
      <Navbar />
      <InputForm />
      <ResumePreview />
    </div>
  );
}

export default App;
