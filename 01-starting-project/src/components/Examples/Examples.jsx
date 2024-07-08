import {useState} from 'react'
import {EXAMPLES} from '../../data.js'
import TapButton from '../../components/Button/TabButton';
import Section from './Section.jsx';
import Tabs from '../Button/TAbs.jsx';

export default function Examples()
{    
    const[selectedTopic, setSelectedTopic ] = useState()

    function handleSelect(selectButton){
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
    return(
        <Section title='Examples' id='examples'>
        {/* <menu> */}
        
          <Tabs 
          // buttonContainer = 'menu'
          buttons={
          <>
          <TapButton isSelected={selectedTopic === 'components'} onClick={() => handleSelect('components')}>
            Components
          </TapButton>
          <TapButton isSelected={selectedTopic === 'props'} onClick={() => handleSelect('props')}>
            Props
          </TapButton>
          <TapButton isSelected={selectedTopic === 'jsx'} onClick={() => handleSelect('jsx')}>
            JSX
          </TapButton> 
          <TapButton isSelected={selectedTopic === 'state'} onClick={() => handleSelect('state')}>
            State
          </TapButton> 
          </>}
          > {tabContent}</Tabs>
          
        
    </Section>    )
}