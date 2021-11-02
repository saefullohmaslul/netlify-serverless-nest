import { HttpStatus, Injectable } from '@nestjs/common';
import { Response } from 'src/models/response.model';
import {
  SUCCESS_GENERATE_RANDOM,
  SUCCESS_HASHED_STRING,
} from './constants/randoms.constant';
import { v4 } from 'uuid';
import * as bcrypt from 'bcrypt';
import { HashedBcryptReqDto } from './dtos/hashed-bcypt-req.dto';

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

  hashedBcrypt(hashedBcryptReqDto: HashedBcryptReqDto) {
    const { key, length = '12' } = hashedBcryptReqDto;

    const hashed = bcrypt.hashSync(key, parseInt(length));
    return new Response(SUCCESS_HASHED_STRING, HttpStatus.OK, hashed);
  }
}
