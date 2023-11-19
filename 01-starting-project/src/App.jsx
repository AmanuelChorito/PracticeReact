import { CORE_CONCEPTS, EXAMPLES, DUMMY_TODOS } from './data.js'
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';
import Todo from './components/Todo.jsx';
import { useState } from 'react';
function App() {
  const [selectedTopic, setSelectedTopic] = useState('');

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
    //console.log(selectedTopic);
  }
  return (
    <div>
      <Header />
      <main>
        <section id='core-concepts'>
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((coreConceptItem)=>
              (<CoreConcept key={coreConceptItem.title} {...coreConceptItem}/>)
            )}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectedTopic==='components'}onSelect={() => handleSelect('components')}>Component</TabButton>
            <TabButton isSelected={selectedTopic==='jsx'} onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedTopic==='props'} onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton isSelected={selectedTopic==='state'} onSelect={() => handleSelect('state')}>State</TabButton>
          </menu>
          {selectedTopic ? (<div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].descriptiob}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}

              </code>
            </pre>
          </div>) : <p> Please select a topic.</p>}
        </section>
        <section>
          <ul>
          {DUMMY_TODOS.map((toDoItem)=>
        (<Todo key={toDoItem} text={toDoItem} />))}
          </ul>
          
        </section>
      </main>
    </div>
  );
}


export default App;