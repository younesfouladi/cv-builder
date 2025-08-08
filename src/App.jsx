import { useState } from "react";
import "./App.css";
import Navbar from "./components/header/navbar.jsx";
import InputForm from "./components/main/inputForm.jsx";

function App() {
  return (
    <div className="container">
      <Navbar />
      <InputForm />
    </div>
  );
}

export default App;
