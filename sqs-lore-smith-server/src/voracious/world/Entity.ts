import World from "./World";

class Entity {
    constructor(
        public id: number,
        public name: string,
        public size: number,
    ) {}

    static create(name: string): Entity {
        return new Entity(World._instance.nextID(), name, 0);
    }

    public _process(delta: number) {
        const growthFactor = 0.9
        let count = World._instance.getEntities().length;

        let growth = Math.pow(growthFactor,(count-1));
        this.size += growth;
    }
}

export default Entity;