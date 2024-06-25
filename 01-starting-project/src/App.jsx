import { CORE_CONCEPTS } from './data';
import {useState} from 'react'
import Header from './components/Header/Header'
import CoreConcept from './components/CoreConcepts/CoreConcept';
import TapButton from './components/Button/TabButton';
import {EXAMPLES} from './data'


function App() {
  const[selectedTopic, setSelectedTopic ] = useState()

  function handleSelect(selectButton){
    // console.log(`hello ${selectButton}`)
    setSelectedTopic(selectButton)

}

let tabContent = <p>Please Select button</p>
if(selectedTopic){
  tabContent = 
    <div id="tab-content">
    <h>{EXAMPLES[selectedTopic].title}</h>
    <p> {EXAMPLES[selectedTopic].description} </p>
    <pre>
      <code>
      {EXAMPLES[selectedTopic].code}
        </code>
      </pre>
    </div>
}
  return (
    <div>
    <header>
      <h1>Hello World!</h1>
    </header>
    <Header />
      <main>
        <section id='core-concepts'>
          {/* <CoreConcept 
            title={CORE_CONCEPTS[0].title}
            description={CORE_CONCEPTS[0].description}
            image={CORE_CONCEPTS[0].image}
          />

          <CoreConcept {...CORE_CONCEPTS[0]}/>
          <CoreConcept {...CORE_CONCEPTS[1]}/>
          <CoreConcept {...CORE_CONCEPTS[2]}/>
          <CoreConcept {...CORE_CONCEPTS[3]}/> */}
          {/* <h2>Core Concepts</h2> */}
          <ul>
            {CORE_CONCEPTS.map((coreItem)=> (
              <CoreConcept key={coreItem.title} {...coreItem}/>))
            }
          </ul>
        </section>
        <section id='examples'>
          <h2>Exambles</h2>
          <menu>
            <TapButton isSelected={selectedTopic === 'components'} onSelect={() => handleSelect('components')}>
              Components
            </TapButton>
            <TapButton isSelected={selectedTopic === 'props'} onSelect={() => handleSelect('props')}>
              Props
            </TapButton>
            <TapButton isSelected={selectedTopic === 'jsx'} onSelect={() => handleSelect('jsx')}>
              JSX
            </TapButton> 
            <TapButton isSelected={selectedTopic === 'state'} onSelect={() => handleSelect('state')}>
              State
            </TapButton>
          </menu>
          {tabContent}

          </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
