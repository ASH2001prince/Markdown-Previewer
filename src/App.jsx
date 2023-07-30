import { useState } from "react";
import "./App.css";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import ashLogo from "./assets/ash-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExpand, faCompress } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [markdown, setMarkdown] = useState(
    "# This is a header\n\n## My H2 heading paragraph\n\nAnd this is a paragraph\n\nYou can add your links this way [Links](https://www.freecodecamp.org/ASH2001prince)\n\n`<h1>ASH, is a good programmer</h1>`\n \n```\n // This is my first function that I wrote\n function multiply(a, b) {\nreturn (a * b)\n};\n multiply(5, 5); \n```\n We can add a list as well\n 1. First item.\n 2. Second item.\n 3. Third item.\n 4. Fourth item.\n > Block Quotes!!!\n\n**I'm bold**\n\n*I'm italic* "
  );
  const [activeComponent, setActiveComponent] = useState(null);

  const toggleActiveComponent = (component) => {
    if (activeComponent === component) setActiveComponent(null);
    else setActiveComponent(component);
  };

  return (
    <main className="w-full h-screen container flex flex-col justify-start items-center">
      {activeComponent === "editor" || activeComponent === null ? (
        <section
          className={`editor-wrapper text-white w-full flex flex-col justify-center items-center mb-2`}
        >
          <div
            className={`flex justify-between toolbar w-[85%] bg-red-950 ${
              activeComponent === "editor" ? "w-full" : ""
            }`}
          >
            <img
              className="max-w-[15%] aspect-[3/2] object-contain"
              src={ashLogo}
              alt="ash logo"
            />
            <FontAwesomeIcon
              className="p-2"
              icon={activeComponent === "editor" ? faCompress : faExpand}
              onClick={() => toggleActiveComponent("editor")}
            />
          </div>
          <textarea
            className={`${
              activeComponent === "editor" ? "w-full h-screen" : "h-[150px]"
            } p-4 bg-red-950 w-[85%]`}
            id="editor"
            value={markdown}
            onChange={(e) => setMarkdown(e.target.value)}
          />
        </section>
      ) : null}

      {/***************************************** 
    The second section */}
      {activeComponent === "preview" || activeComponent === null ? (
        <section
          id="preview"
          className={`${
            activeComponent === "preview" ? "w-full h-screen" : ""
          } bg-slate-300 rounded w-full bg-red-950`}
        >
          <div className="p-2 toolbar flex justify-between items-center bg-red-950 text-white">
            <h1 className="text-white text-[25px] uppercase">Previewer</h1>
            <FontAwesomeIcon
              icon={activeComponent === "preview" ? faCompress : faExpand}
              onClick={() => toggleActiveComponent("preview")}
            />
          </div>
          <ReactMarkdown
            className="text-white bg-red-950 p-4 leading-9"
            remarkPlugins={[gfm]}
          >
            {markdown}
          </ReactMarkdown>
        </section>
      ) : null}
    </main>
  );
}
export default App;
