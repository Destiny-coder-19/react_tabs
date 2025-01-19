import { useState } from "react";
import TabButton from "./../TabButton/TabButton";
import { EXAMPLES } from "./../../data.js";

function Examples() {
  const [tabContent, setTabContent] = useState();

  const handleSelect = (name) => {
    setTabContent(name);
  };
  return (
    <>
      <section id="examples">
        <h2>Examples</h2>
        <menu>
          <TabButton
            isSelected={tabContent === "components"}
            onSelect={() => handleSelect("components")}
          >
            Components
          </TabButton>
          <TabButton
            isSelected={tabContent === "jsx"}
            onSelect={() => handleSelect("jsx")}
          >
            JSX
          </TabButton>
          <TabButton
            isSelected={tabContent === "props"}
            onSelect={() => handleSelect("props")}
          >
            Props
          </TabButton>
          <TabButton
            isSelected={tabContent === "state"}
            onSelect={() => handleSelect("state")}
          >
            State
          </TabButton>
        </menu>
        <div id="tab-content">
          {!tabContent ? (
            "Please Click A Button"
          ) : (
            <>
              <h3>{EXAMPLES[tabContent].title}</h3>
              <p>{EXAMPLES[tabContent].description}</p>
              <pre>{EXAMPLES[tabContent].code}</pre>
            </>
          )}
        </div>
      </section>
    </>
  );
}

export default Examples;
