import { Module } from '@nestjs/common';
import { DobotModule } from './position/dobot.module';

@Module({
  imports: [DobotModule],
})
export class AppModule {}
