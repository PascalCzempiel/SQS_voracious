import { useContext } from "react";
import { AppDataContext } from "../AppData/AppDataProvider";

function TestElement() {
    const [appData,] = useContext(AppDataContext);
    return (
        <div>
            {JSON.stringify(appData.getWorld())}
        </div>
    );
}

export default TestElement;