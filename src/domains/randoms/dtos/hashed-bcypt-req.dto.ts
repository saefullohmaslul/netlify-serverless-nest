import {
  IsNotEmpty,
  IsNumberString,
  IsOptional,
  IsString,
} from 'class-validator';

export class HashedBcryptReqDto {
  @IsOptional()
  @IsNumberString()
  length?: string;

  @IsNotEmpty()
  @IsString()
  key: string;
}
