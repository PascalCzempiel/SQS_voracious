import { GetWorldResponseDTO } from "../dtos/getWorld.response.dto";
import Entity from "./Entity";

class World {
    constructor(
        public readonly time: number,
        public readonly entities: Entity[]
    ){}

    static fromDTO(data: GetWorldResponseDTO): World {
        return new World(
            data.time,
            data.entities.map(i=>new Entity(i.id,i.name,i.size))
        );
    }
}

export default World;