import { Type } from 'class-transformer';
import { IsString, IsNumber, IsArray, ValidateNested } from 'class-validator';

export class CreateNoticiaDto {
  @IsString()
  titulo: string;

  @IsString()
  sumario: string;

  @IsString()
  cuerpo: string;

  @IsString()
  portada: string;

  @IsNumber()
  usuarioCreacionId: number;

  @IsNumber()
  usuarioModificacionId: number;

  @IsArray()
  tagsIds: number[];
}
