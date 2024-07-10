import Header from "./components/Header"
import UserInput from "./components/UserInput"
import Result from "./components/Result.jsx"

import { useState } from "react"


  const path = "../src/assets/investment-calculator-logo.png"
  const headLine = `Investment Calculator`
  const InputContainer = "form"
export default function App(){
const[inputValues, setValues] = useState({})


  return (
    <>
    <Header path={path} headLine={headLine}/>
    <InputContainer className="input-container">
      <UserInput inputName="initial investment"/>
      <UserInput inputName="annual investment"/>
      <UserInput inputName="expected return"/>
      <UserInput inputName="duration"/>
    </InputContainer>
    <Result/>

    </>
  )
}