import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateTagDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(10)
  prefijoTag: string;

  @IsString()
  nombre: string;
}
