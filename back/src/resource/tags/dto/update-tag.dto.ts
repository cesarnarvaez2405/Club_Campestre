import { PartialType } from '@nestjs/mapped-types';
import { CreateTagDto } from './create-tag.dto';
import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class UpdateTagDto extends PartialType(CreateTagDto) {
  @IsNotEmpty()
  @IsString()
  @MaxLength(10)
  prefijoTag: string;

  @IsString()
  nombre: string;
}
