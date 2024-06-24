import { CORE_CONCEPTS } from './data';
import {useState} from 'react'
import Header from './components/Header/Header'
import CoreConcept from './components/CoreConcepts/CoreConcept';
import TapButton from './components/Button/TabButton';



function App() {
  const[selectedTopic, setSelectedTopic ] = useState("please write here")

  function handleSelect(selectButton){

    // console.log(`hello ${selectButton}`)
    setSelectedTopic(selectButton)

}
  return (
    <div>
    <header>
      <h1>Hello World!</h1>
    </header>
    <Header />
      <main>
        <section id='core-concepts'>
          <CoreConcept 
            title={CORE_CONCEPTS[0].title}
            description={CORE_CONCEPTS[0].description}
            image={CORE_CONCEPTS[0].image}
          />

          <CoreConcept {...CORE_CONCEPTS[0]}/>
          <CoreConcept {...CORE_CONCEPTS[1]}/>
          <CoreConcept {...CORE_CONCEPTS[2]}/>
          <CoreConcept {...CORE_CONCEPTS[3]}/>
        </section>
        <section id='examples'>
          <h2>Exambles</h2>
          <menu>
            <TapButton onSelect={() => handleSelect('component')}>
              Components
            </TapButton>
            <TapButton onSelect={() => handleSelect('props')}>
              Props
            </TapButton>
            <TapButton onSelect={() => handleSelect('JSX')}>
              JSX
            </TapButton> 
            <TapButton onSelect={() => handleSelect('State')}>
              State
            </TapButton>
          </menu>
          {selectedTopic}
        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
