import { useEffect, useState } from "react";

export function RenderResumePicture() {
  return (
    <div className="resume-picture">
      <img src={"../../images/person.jpg"} alt="Person Picture" />
    </div>
  );
}

export function RenderResumeAddress() {
  const [address, setAddres] = useState("");
  useEffect(() => {
    const input = document.querySelector("#address");

    input.addEventListener("input", (e) => {
      setAddres(e.target.value);
    });
  });
  return <p className="resume-address">{address}</p>;
}

export function RenderResumeEmail() {
  const [email, setEmail] = useState("");
  useEffect(() => {
    const input = document.querySelector("#email");

    input.addEventListener("input", (e) => {
      setEmail(e.target.value);
    });
  });
  return <p className="resume-email">{email}</p>;
}

export function RenderResumeNumber() {
  const [number, setNumber] = useState("");
  useEffect(() => {
    const input = document.querySelector("#number");

    input.addEventListener("input", (e) => {
      setNumber(e.target.value);
    });
  });
  return <p className="resume-number">{number}</p>;
}

export function RenderResumeName() {
  const [name, setName] = useState("");
  useEffect(() => {
    const input = document.querySelector("#firstname");

    input.addEventListener("input", (e) => {
      setName(e.target.value);
    });
  });
  return <h1 className="resume-name">{name}</h1>;
}

export function RenderResumeLastName() {
  const [lastName, setLastName] = useState("");
  useEffect(() => {
    const input = document.querySelector("#lastname");

    input.addEventListener("input", (e) => {
      setLastName(e.target.value);
    });
  });
  return <h1 className="resume-lastname">{lastName}</h1>;
}

export function RenderResumeJobTitle() {
  const [jobTitle, setJobTitle] = useState("");
  useEffect(() => {
    const input = document.querySelector("#jobtitle");

    input.addEventListener("input", (e) => {
      setJobTitle(e.target.value);
    });
  });
  return <h2 className="resume-jobtitle">{jobTitle}</h2>;
}
