import { IsEmail, IsPositive, IsString } from 'class-validator';

export class CreateTercerosInteresadoDto {
  @IsString()
  nombre: string;

  @IsEmail()
  email: string;

  @IsPositive()
  telefono: number;

  @IsString()
  notas: string;
}
