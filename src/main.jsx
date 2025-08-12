import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/global/reset.css";
import "./styles/global/utilities.css";
import App from "./App.jsx";
import { Analytics } from "@vercel/analytics/react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <Analytics />
  </StrictMode>
);
