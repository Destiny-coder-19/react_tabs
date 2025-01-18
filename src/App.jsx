import { useState } from "react";
import CoreConcept from "./Components/CoreConcept/CoreConcept.jsx";
import Header from "./Components/Header/header.jsx";
import TabButton from "./Components/TabButton/TabButton.jsx";
import { CORE_CONCEPTS, EXAMPLES } from "./data.js";

function App() {
  const [tabContent, setTabContent] = useState();

  const handleSelect = (name) => {
    setTabContent(name);
  };

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((item, i) => {
              return (
                <CoreConcept
                  key={i + item.title}
                  image={item.image}
                  title={item.title}
                  description={item.description}
                />
              );
            })}
          </ul>
        </section>

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
      </main>
    </div>
  );
}

export default App;
