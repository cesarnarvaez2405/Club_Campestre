import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class RegisterDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsString()
  nombre: string;

  @IsString()
  password: string;

  @IsString()
  @IsOptional()
  rol: string;

  @IsBoolean()
  @IsOptional()
  estaActivo: boolean;
}
