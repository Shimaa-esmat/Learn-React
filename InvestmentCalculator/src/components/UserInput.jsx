import { useState } from "react"


export default function UserInput({inputName, initvalue}){
    const [value, setValuea] = useState(initvalue)
    function handleInputChange(e){
        setValuea(e.target.value)
    }
    let idValue = inputName.replace(" ","-")
    return(
    <div className="input-field">
        <label for={idValue}>{inputName}</label>    
        <input type="number" id={idValue} onChange={handleInputChange} required/>
        {console.log(value)}

    </div>
    )
}

