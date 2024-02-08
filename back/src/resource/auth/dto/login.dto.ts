import { Transform } from 'class-transformer';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class LoginDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsString()
  @Transform(({ value }) => value.trim()) //Esto no permite los espacios en null o en blanco
  password: string;
}
