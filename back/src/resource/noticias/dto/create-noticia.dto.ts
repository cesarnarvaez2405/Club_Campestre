import { Type } from 'class-transformer';
import { IsString, IsNumber, IsArray, ValidateNested } from 'class-validator';
import { CreateTagDto } from 'src/resource/tags/dto/create-tag.dto';

export class CreateNoticiaDto {
  @IsString()
  titulo: string;

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
