import { useState } from "react"
export default function Player({initialName, symbol, isActive}){
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);  
  function handleEditClick(){
      setIsEditing((edting) => !edting);
  }

  let editablePlayerName =<span className='player-name'>{playerName}</span>

  function handleChange(e){
    setPlayerName(e.target.value)
  }
  
  if(isEditing){
    editablePlayerName = (
      <input type="text" className="player-name" required value={playerName} onChange={handleChange} />
    )
  }
  return(
    <li className={isActive ? 'active' : undefined}>
      <span className='player'>
        {editablePlayerName }
        <span className='player-symbol'>{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing  ? 'Save': 'Edit' }</button>
    </li>
  )
}