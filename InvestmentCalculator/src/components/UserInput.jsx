// 

export default function UserInput({inputName, onChange }){


    let idValue = inputName.replace(" ","")
    return(
    <div className="input-field">
        <label for={idValue}>{inputName}</label>    
        <input type="number" id={idValue} 
        onChange={(e) => onChange(idValue, e.target.value )} required/>
    </div>
    )
}






// export default function UserInput({onChange, userInput}){




//     return (
//         < >
//             <div className="input-field">
//             <p>
//                 <label>initial Investment</label>
//                 <input type="number" required value={userInput.initialInvestment}  onChange={(e) => onChange('initialInvestment', e.target.value )}/>
//             </p>
//             <p>
//                 <label>Annual Investment</label>
//                 <input type="number" required value={userInput.annualInvestment} onChange={(e) => onChange('annualInvestment', e.target.value )}/>
//             </p>
//             </div>
//             <div className="input-field">
//             <p>
//                 <label>Expected Return</label>
//                 <input type="number" required value={userInput.expectedReturn} onChange={(e) => onChange('expectedReturn', e.target.value )}/>
//             </p>
//             <p>
//                 <label>Duration</label>
//                 <input type="number" required value={userInput.duration } onChange={(e) => onChange('duration', e.target.value )}/>
//             </p>
//             </div>
//         </>
//     )
// }









