import World from "../container/World";

class AppData {
    private world: World | undefined;
    private data: string = "";


    public isValid(): boolean {
        if (this.world !== undefined) return true;
        else return false;
    }

    public getWorld(): World {
        if (this.world === undefined) throw new TypeError("world is still undefined");
        return this.world;
    }

    public setWorld(data: World) {
        this.world = data;
    }

    static build(): AppData {
        let obj = new AppData();
        return obj;
    }
}

export default AppData;