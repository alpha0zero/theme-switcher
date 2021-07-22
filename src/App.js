import { useEffect } from "react";
import "./styles.css";

export default function App() {
  const switchTheme = (theme) => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  };

  useEffect(() => {
    const myTheme = localStorage.getItem("theme") || "light";
    document.body.setAttribute("data-theme", myTheme);
  }, []);

  return (
    <div className="App">
      <div className="theme-switcher">
        <i
          onClick={() => switchTheme("light")}
          className="bi bi-brightness-high switch"
        ></i>
        <i
          onClick={() => switchTheme("dark")}
          className="bi bi-moon switch"
        ></i>
        <br />
        <span style={{ fontWeight: "bold" }}>switch theme</span>
      </div>
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
