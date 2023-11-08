import { useState } from 'react';

import componentImg from './assets/components.png';
import { CORE_CONCEPTS } from "./data";
import { EXAMPLES } from "./data";
import Header from './components/Header/Header';
import CoreConcept from './components/CoreConcept';
import TabButton from './components/TabButton';
import Card from './components/Card';

function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedBtn) {
    setSelectedTopic(selectedBtn);
    console.log('selectedTopic: ', selectedTopic);
  }

  let tabContent = <p>Please select a topic.</p>;

  if (selectedTopic) {
    tabContent = <div id="tab-content">
      <h3>{EXAMPLES[selectedTopic].title}</h3>
      <p>{EXAMPLES[selectedTopic].description}</p>
      <pre>
              <code>
                {EXAMPLES[selectedTopic].code}
              </code>
            </pre>
    </div>;
  }


  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleSelect('components')}>Components</TabButton>
            <TabButton onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton onSelect={() => handleSelect('state')}>State</TabButton>
          </menu>
          {tabContent}
        </section>
        <section id="experts">
          <h1>Available Experts</h1>
          <Card name="Anthony Blake">
            <p>
              Blake is a professor of Computer Science at the University of
              Illinois.
            </p>
            <p>
              <a href="mailto:blake@example.com">Email Anthony</a>
            </p>
          </Card>

          <Card name="Maria Miles">
            <p>
              Maria is a professor of Computer Science at the University of
              Illinois.
            </p>
            <p>
              <a href="mailto:blake@example.com">Email Maria</a>
            </p>
          </Card>
        </section>
      </main>
    </div>
  );
}

export default App;
