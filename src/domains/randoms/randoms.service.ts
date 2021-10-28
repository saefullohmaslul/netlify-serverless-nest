import { HttpStatus, Injectable } from '@nestjs/common';
import { Response } from 'src/models/response.model';
import { SUCCESS_GENERATE_RANDOM } from './constants/randoms.constant';
import { v4 } from 'uuid';

@Injectable()
export class RandomsService {
  randomString() {
    const string =
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15);
    return new Response(SUCCESS_GENERATE_RANDOM, HttpStatus.OK, string);
  }

  randomUUID() {
    const uuid = v4();
    return new Response(SUCCESS_GENERATE_RANDOM, HttpStatus.OK, uuid);
  }
}
