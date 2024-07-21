// import { useState } from "react"


// export default function UserInput({inputName}){
//     const [value, setValuea] = useState({
//         initialInvestment: 10,
//         annualInvestment: 12,
//         expectedReturn:6,
//         duration: 10
//     })


//     let idValue = inputName.replace(" ","")
//     console.log(value[idValue])


//     function handleInputChange(inputIdentifier, newValue){
//         setValuea = (prevInput => {
//             return {
//                 ...prevInput, 
//                 [inputIdentifier]: newValue
//             }
//         })
//     }
//     console.log(value.duration)

//     return(
//     <div className="input-field">
//         <label for={idValue}>{inputName}</label>    
//         <input type="number" id={idValue} value={value.duration}
//         onChange={(e)=> handleInputChange('duration', e.target.value)} required/>
//     </div>
//     )
// }





import { useState } from "react"

export default function UserInput({onChange, userInput}){




    return (
        < >
            <div className="input-field">
            <p>
                <label>initial Investment</label>
                <input type="number" required value={userInput.initialInvestment}  onChange={(e) => onChange('initialInvestment', e.target.value )}/>
            </p>
            <p>
                <label>Annual Investment</label>
                <input type="number" required value={userInput.annualInvestment} onChange={(e) => onChange('annualInvestment', e.target.value )}/>
            </p>
            </div>
            <div className="input-field">
            <p>
                <label>Expected Return</label>
                <input type="number" required value={userInput.expectedReturn} onChange={(e) => onChange('expectedReturn', e.target.value )}/>
            </p>
            <p>
                <label>Duration</label>
                <input type="number" required value={userInput.duration } onChange={(e) => onChange('duration', e.target.value )}/>
            </p>
            </div>
        </>
    )
}









