import { useContext, useState } from "react";
import { AppDataContext } from "../AppData/AppDataProvider";
import EntityItem from "./EntityItem";

export default function EntityList() {
    const [appData,appDataAPI] = useContext(AppDataContext);
    const [eaters,setEaters] = useState<number[]>([]);

    function handleCheckbox(id: number, checked: boolean) {
        if (checked && !eaters.includes(id)) {
            setEaters([...eaters,id]);
            return;
        }
        else if (!checked && eaters.includes(id)) {
            setEaters(eaters.filter(e=>e!==id));
            return;
        }
    }

    function handleHuntButton(id: number) {
        appDataAPI.consume({
            hunters: eaters,
            prey: id
        });
        setEaters([]);
    }

    return (
        <ul>
            {appData.getWorld().entities.map((e,i)=><EntityItem key={i} entity={e} onCheckbox={handleCheckbox} onHunt={handleHuntButton} checked={eaters.includes(e.id)} disabled={eaters.length===0}/>)}
        </ul>
    );
}