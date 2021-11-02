import { Controller, Get, Query } from '@nestjs/common';
import { Response } from 'src/models/response.model';
import { HashedBcryptReqDto } from './dtos/hashed-bcypt-req.dto';
import { RandomsService } from './randoms.service';

@Controller('randoms')
export class RandomsController {
  constructor(private readonly randomsService: RandomsService) {}

  @Get('string')
  randomString(): Response {
    return this.randomsService.randomString();
  }

  @Get('uuid')
  randomUUID(): Response {
    return this.randomsService.randomUUID();
  }

  @Get('bcrypt')
  hashedBcrypt(@Query() hashedBcryptReqDto: HashedBcryptReqDto): Response {
    return this.randomsService.hashedBcrypt(hashedBcryptReqDto);
  }
}
