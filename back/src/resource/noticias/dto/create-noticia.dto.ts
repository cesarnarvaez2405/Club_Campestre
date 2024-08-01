import { Type } from 'class-transformer';
import {
  IsString,
  IsNumber,
  IsArray,
  ValidateNested,
  IsNotEmpty,
  IsBoolean,
  IsOptional,
} from 'class-validator';

export class CreateNoticiaDto {
  @IsNotEmpty({ message: 'El titulo es obligatorio' })
  @IsString()
  titulo: string;

  @IsNotEmpty({ message: 'El sumario es obligatorio' })
  @IsString()
  sumario: string;

  @IsNotEmpty({ message: 'El Cuerpo es obligatorio' })
  @IsString()
  cuerpo: string;

  @IsNotEmpty({ message: 'La Portada es obligatorio' })
  @IsString()
  portada: string;

  @IsOptional()
  @IsBoolean()
  estaActivo?: boolean;

  @IsNotEmpty({ message: 'El usuarioCreacionId es obligatorio' })
  @IsNumber()
  usuarioCreacionId: number;

  @IsNotEmpty({ message: 'El usuarioModificacionId es obligatorio' })
  @IsNumber()
  usuarioModificacionId: number;

  @IsNotEmpty({ message: 'Los tags son obligatorio' })
  @IsArray()
  tagsIds: number[];
}
