import World from "../container/World";
import { ConsumeDto } from "../dtos/consume.dto";
import { GetWorldResponseDTO } from "../dtos/getWorld.response.dto";
import { SpawnEntityDto } from "../dtos/spawnEntity.dto";
import AppData from "./AppData";

class AppDataAPI {
    private url: string = "";
    private interval: NodeJS.Timer | undefined;

    constructor (
        private onUpdate: Function
    ){}


    public connect(url: string) {
        console.log("connect AppData");
        this.url = url;
        this.interval = setInterval(this.getWorld.bind(this),1000);
        this.getWorld();
    }

    public disconnect() {
        console.log("disconnect AppData");
        clearInterval(this.interval);
        this.interval = undefined;
    }

    public setOnUpdate(f: Function) {
        this.onUpdate = f;
    }

    public getWorld() {
        let url = this.url + "/voracious";
        fetch(url)
        .then(response => {
            return response.json();
        })
        .then((json: GetWorldResponseDTO) => {
            let data = AppData.build();
            data.setWorld(World.fromDTO(json));
            this.onUpdate(data);
        });
    }

    public resetWorld() {
        let url = this.url + "/voracious/resetWorld";
        fetch(url,{
            method: "POST",
        })
    }

    public spawnEntity(data: SpawnEntityDto) {
        let url = this.url + "/voracious/spawnEntity";
        fetch(url,{
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(data)
        })
    } 

    public consume(data: ConsumeDto) {
        let url = this.url + "/voracious/consume";
        fetch(url,{
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(data)
        })
    }

}

export default AppDataAPI;