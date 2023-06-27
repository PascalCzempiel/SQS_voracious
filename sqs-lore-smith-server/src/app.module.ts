import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VoraciousModule } from './voracious/voracious.module';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [ScheduleModule.forRoot(), VoraciousModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
