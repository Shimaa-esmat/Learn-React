import Header from "./components/Header"
import path from './assets/investment-calculator-logo.png'
import UserInput from "./components/UserInput"
import Result from "./components/Result.jsx"

import { useState } from "react"


  const headLine = `Investment Calculator`
  const InputContainer = "form"




export default function App(){
  const [userInput, setUserInput] = useState({
    initialInvestment: 10,
    annualInvestment: 12,
    expectedReturn:6,
    duration: 10
}) 
function handleInputChange(inputIdentifier, newValue){
  setUserInput (prevUserInput => {
      return {
          ...prevUserInput, 
          [inputIdentifier]: +newValue
      }

  })
}

  return (
    <>
    <Header path={path} headLine={headLine}/>
    <InputContainer className="input-container" >
    {/* <UserInput onChange={handleInputChange} userInput={userInput}/> */}
      <UserInput inputName="initial Investment" onChange={handleInputChange} />
      <UserInput inputName="annual Investment" onChange={handleInputChange} />
      <UserInput inputName="expected Return" onChange={handleInputChange} />
      <UserInput inputName="duration" onChange={handleInputChange} />
    </InputContainer>
    <Result userInput={userInput}/>
    </>
  )
}