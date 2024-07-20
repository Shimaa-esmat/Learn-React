import { useState } from "react"


export default function UserInput({inputName, initValue}){
    const [value, setValuea] = useState({
        'duration': initValue,
        
    })
    if(inputName == 'duration'){
        console.log('yesssssss')
    }
    // console.log(value)
    let idValue = inputName.replace(" ","")

    
    function handleInputChange(e){
        // setValuea(e.target.value)
        // field = {
        //     [inputName]: e.target.value
        // }
        // console.log(field)

        // return field
    }

    let field = {
        "duration": value
    }
    console.log(field.duration)

    return(
    <div className="input-field">
        <label for={idValue}>{inputName}</label>    
        <input type="number" id={idValue} value={value}
        onChange={handleInputChange} required/>
    </div>
    )
}
