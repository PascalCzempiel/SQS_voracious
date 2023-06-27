import { useContext } from "react"
import { AppDataContext } from "../AppData/AppDataProvider"

export default function WorldTime() {
    const [appData,] = useContext(AppDataContext);
    return <span className="worldTime">Weltzeit: {appData.getWorld().time}</span>
}