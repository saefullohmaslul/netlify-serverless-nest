import { Controller, Get } from '@nestjs/common';
import { Response } from 'src/models/response.model';
import { RandomsService } from './randoms.service';

@Controller('randoms')
export class RandomsController {
  constructor(private readonly randomsService: RandomsService) {}

  @Get('string')
  randomString(): Response {
    return this.randomsService.randomString();
  }
}
