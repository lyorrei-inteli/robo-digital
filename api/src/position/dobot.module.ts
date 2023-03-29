import { Module } from '@nestjs/common';
import { PositionController } from './dobot.controller';
import { DobotService } from './dobot.service';
import { PrismaService } from '../database/prisma.service';

@Module({
  imports: [],
  controllers: [PositionController],
  providers: [DobotService, PrismaService],
})
export class DobotModule {}
