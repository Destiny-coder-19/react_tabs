import { CORE_CONCEPTS } from "./../../data.js";
import CoreConcept from "./../CoreConcept/CoreConcept.jsx";

function CoreConcepts() {
  return (
    <>
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
    </>
  );
}

export default CoreConcepts;
