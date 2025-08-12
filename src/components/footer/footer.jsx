import { Github } from "lucide-react";
import "../../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p>
        &copy; 2025 | Made with ❤️ by{" "}
        <a href="https://github.com/younesfouladi/" target="_blank">
          <Github /> Younes Fouladi
        </a>
      </p>
    </footer>
  );
}
