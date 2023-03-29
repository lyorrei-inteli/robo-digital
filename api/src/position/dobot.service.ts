import { Injectable } from '@nestjs/common';
import axios from '../../axios';
import { CreatePositionDto } from './dto/create-position.dto';

@Injectable()
export class DobotService {
  async getPosition(): Promise<CreatePositionDto> {
    const { data } = await axios.get('/get_position');
    return {
      x: data[0],
      y: data[1],
      z: data[2],
      r: data[3],
      j1: data[4],
      j2: data[5],
      j3: data[6],
      j4: data[7],
    };
  }
}
