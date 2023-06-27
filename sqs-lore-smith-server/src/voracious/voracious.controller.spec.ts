import { Test } from "@nestjs/testing";
import { VoraciousController } from "./voracious.controller";
import { WorldService } from "./world.service";

describe ('VoraciousController', () => {
    let voraciousController: VoraciousController;
    let worldService: WorldService;

    beforeEach(async () => {
        const moduleRef = await Test.createTestingModule({
            controllers: [VoraciousController],
            providers: [WorldService],
        }).compile();

        voraciousController = moduleRef.get<VoraciousController>(VoraciousController);
        worldService = moduleRef.get<WorldService>(WorldService);
    });

    describe('getWorld', ()=> {
        it('should return a json representing the world', async () => {
            const result: any = {time: 20, tree: "elm", entities: [{name: "test", size: 20, id: 0}]};
            jest.spyOn(worldService, 'getWorld').mockImplementation(() => result);
        })
    });
});