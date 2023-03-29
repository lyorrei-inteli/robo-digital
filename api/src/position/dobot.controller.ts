import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { randomUUID } from 'crypto';
import { PrismaService } from 'src/database/prisma.service';
import { DobotService } from './dobot.service';
import { CreatePositionDto } from './dto/create-position.dto';

@Controller()
export class PositionController {
  constructor(
    private readonly dobotService: DobotService,
    private prisma: PrismaService,
  ) {}

  @Get()
  async getPositions() {
    const positions = await this.prisma.position.findMany({});
    return positions;
  }

  @Get('/lastPosition')
  async lastPosition() {
    const position = await this.prisma.position.findMany({
      orderBy: {
        id: 'desc',
      },
      take: 1,
    });
    return position;
  }

  @Get('/dobot/store_position')
  async dobotStorePosition() {
    try {
      const position = await this.dobotService.getPosition();
      const newPosition = await this.prisma.position.create({
        data: {
          id: randomUUID(),
          ...position,
        },
      });
      return newPosition;
    } catch (err) {
      throw new HttpException(
        'Não foi possível criar a nova posição no banco de dados',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Post('/store_position')
  async storePosition(@Body() position: CreatePositionDto) {
    try {
      const newPosition = await this.prisma.position.create({
        data: {
          id: randomUUID(),
          ...position,
        },
      });
      return newPosition;
    } catch (err) {
      throw new HttpException(
        'Não foi possível criar a nova posição no banco de dados',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
