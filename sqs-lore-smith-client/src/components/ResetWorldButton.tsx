import { useContext } from "react";
import { AppDataContext } from "../AppData/AppDataProvider";

function ResetWorldButton() {
    const [,appDataAPI] = useContext(AppDataContext);
    function handleButtonClick() {
        appDataAPI.resetWorld();
    }
    return (
        <button className="resetWorldButton" onClick={handleButtonClick}>
            Neue Welt
        </button>
    );
}

export default ResetWorldButton;