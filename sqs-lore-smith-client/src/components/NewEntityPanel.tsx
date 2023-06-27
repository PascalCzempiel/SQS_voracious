import { useContext, useState } from "react";
import { AppDataContext } from "../AppData/AppDataProvider";

function NewEntityPanel() {
    const [,appDataAPI] = useContext(AppDataContext);
    
    function handleButtonClick() {
        if (name === "") {
            alert("Name darf nicht leer sein!")
            return;
        }
        appDataAPI.spawnEntity({name: name});
    }

    const [name,setName] = useState<string>("");

    return (
        <span className="newEntityPanel">
            <input type="text" placeholder="Name" value={name} onChange={e=>setName(e.target.value)}/>
            <button onClick={handleButtonClick}>Spawn!</button>
        </span>
    );
}

export default NewEntityPanel;