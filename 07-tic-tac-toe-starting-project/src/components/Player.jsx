import { useState } from "react"
export default function Player({ name, symbol }) {
    const [playerName, setPlayerName] = useState(name);
    const [isEditing, setIsEditing] = useState(false);
    function handleEditButtonClick() {
        setIsEditing((editing) => !editing);
    }
    function handleChange(event) {
        setPlayerName(event.target.value)
    }


    return (<li>
        <span>
            {isEditing || <span className="player-name">{playerName} </span>}
            {isEditing && <input type="text" required value={playerName} onChange={handleChange}></input>}
            <span className="player-symbol">{symbol} </span>
            <button onClick={handleEditButtonClick}>{isEditing ? 'Save' : 'Edit'} </button>
        </span>
    </li>)
}