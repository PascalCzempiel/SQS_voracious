import Entity from "./Entity";

class World {
    static _instance: World = null;

    private _nextID: number = 0;
    public entities: Entity[] = [];
    public time: number = 0;

    static create(): World {
        let world = new World();
        World._instance = world;
        return world;
    }

    static fromJSON(data: any): World {
        let world = World.create();
        world._nextID = data._nextID;
        world.time = data.time;
        world.entities = data.entities.map(e=>new Entity(e.id, e.name, e.size));
        return world;
    }

    public nextID(): number {
        this._nextID++;
        return this._nextID-1;
    }

    public addEntity(entity: Entity) {
        this.entities.push(entity);
    }

    public getEntities(): Entity[] {
        return this.entities;
    }

    public _process(delta: number) {
        this.time += delta;

        this.entities.forEach(entity => {
            entity._process(delta);
        });
    }
}

export default World;