import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  const [mode, setMode] = useState("light");

  const toogleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#333";
      document.body.style.color = "white";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  };
  return (
    <div>
      {/* <Navbar title="ShuvoBlog" /> */}
      <Navbar title="Textutils" mode={mode} toogleMode={toogleMode} />
      <TextForm headline="Enter text to analyze" mode={mode} />
      <About />
    </div>
  );
}

export default App;
