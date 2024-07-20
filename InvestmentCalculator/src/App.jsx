import Header from "./components/Header"
import path from './assets/investment-calculator-logo.png'
// import UserInput from "./components/UserInput"
import Result from "./components/Result.jsx"

import { useState } from "react"


  const headLine = `Investment Calculator`
  const InputContainer = "form"




export default function App(){

  return (
    <>
    <Header path={path} headLine={headLine}/>
    <InputContainer className="input-container" >
      {/* <UserInput inputName="initial investment" initValue='10' /> */}
      {/* <UserInput inputName="annual investment" initValue='10'  /> */}
      {/* <UserInput inputName="expected return" initValue='10' /> */}
      {/* <UserInput inputName="duration" initValue='10' /> */}
    </InputContainer>
    <Result/>
    </>
  )
}