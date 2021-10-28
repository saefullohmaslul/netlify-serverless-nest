import { HttpStatus, Injectable } from '@nestjs/common';
import { Response } from 'src/models/response.model';
import { SUCCESS_GENERATE_RANDOM } from './constants/randoms.constant';

@Injectable()
export class RandomsService {
  randomString() {
    const string =
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15);
    return new Response(SUCCESS_GENERATE_RANDOM, HttpStatus.OK, string);
  }
}
