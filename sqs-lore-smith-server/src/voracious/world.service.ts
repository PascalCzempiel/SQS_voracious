import { Injectable, OnModuleInit } from '@nestjs/common';
import World from './world/World';
import { Interval } from '@nestjs/schedule';
import Entity from './world/Entity';
import * as fs from 'fs';

@Injectable()
export class WorldService implements OnModuleInit {
    private world: World;

    onModuleInit() {
        this.world = this._loadWorld();
    }

    _saveWorld() {
        fs.writeFile('savegame/worlddata.json', JSON.stringify(this.world), (err)=>{if (err) console.error(err)});
    }

    _loadWorld(): World {
        let buf = fs.readFileSync('savegame/worlddata.json',{encoding: "utf8"});
        return World.fromJSON(JSON.parse(buf));
    }

    @Interval(1000)
    _process() {
        this.world._process(1);
        this._saveWorld();
    }

    getWorld(): World {
        return this.world;
    }

    consume(hunters: number[], prey: number): Boolean {
        let hunterEntities = hunters.map(i => this.world.entities.find(e=>e.id===i));
        let preyEntity = this.world.entities.find(e=>e.id===prey);

        let power = 0;
        hunterEntities.forEach(e=>power+=e.size);
        if (power > preyEntity.size) {
            this.world.entities = this.world.entities.filter(e=>e.id!==preyEntity.id);
            hunterEntities.forEach(e=>e.size+=(preyEntity.size/hunterEntities.length));
            return true;
        }
        else {
            return false;
        }
    }

    resetWorld() {
        this.world = World.create();
    }
}
