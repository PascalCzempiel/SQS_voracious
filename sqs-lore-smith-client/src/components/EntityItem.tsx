import Entity from "../container/Entity";
import EntityIcon from "./EntityIcon";

interface Props {
    key: number,
    entity: Entity,
    onCheckbox: Function,
    checked: boolean,
    onHunt: Function,
    disabled: boolean,
}

export default function EntityItem(props: Props) {
    return (
        <li key={props.key}>
            <input type="checkbox" onChange={(e)=>props.onCheckbox(props.entity.id,!props.checked)} checked={props.checked}/>
            <EntityIcon iconID={props.entity.getHash()}/>
            {props.entity.name} - {props.entity.size.toFixed(2)}
            <button onClick={()=>props.onHunt(props.entity.id)} disabled={props.disabled}>Beute!</button>
        </li>
    );
}