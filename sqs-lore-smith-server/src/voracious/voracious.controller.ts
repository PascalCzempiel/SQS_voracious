import { Body, Controller, Get, Post } from '@nestjs/common';
import { WorldService } from './world.service';
import World from './world/World';
import { SpawnEntityDto } from './dtos/spawnEntity.dto';
import Entity from './world/Entity';
import { ConsumeDto } from './dtos/consume.dto';

@Controller('voracious')
export class VoraciousController {
    constructor(private worldService: WorldService) {}

    @Get()
    getWorld(): World {
        return this.worldService.getWorld();
    }

    @Post('spawnEntity')
    spawnEntity(@Body() spawnEntityDto: SpawnEntityDto)  {
        this.worldService.getWorld().addEntity(Entity.create(spawnEntityDto.name));
    }

    @Post('resetWorld')
    resetWorld() {
        this.worldService.resetWorld();
    }

    @Post('consume')
    consume(@Body() consumeDto: ConsumeDto): Boolean {
        return this.worldService.consume(consumeDto.hunters, consumeDto.prey);
    }

}