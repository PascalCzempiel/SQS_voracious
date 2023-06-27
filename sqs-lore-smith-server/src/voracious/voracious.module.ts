import { Module } from '@nestjs/common';
import { VoraciousController } from './voracious.controller';
import { WorldService } from './world.service';

@Module({
    imports: [],
    controllers: [VoraciousController],
    providers: [WorldService]
})
export class VoraciousModule {}