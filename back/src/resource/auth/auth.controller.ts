import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
  Req,
  InternalServerErrorException,
  Query,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { Request } from 'express';
import { Role } from '../common/enums/rol.enum';
import { Auth } from './decorators/auth.decorators';
import { UsuarioActivo } from '../common/decorators/usuarioActivo.decorators';
import { UsuarioActivoInterface } from '../common/interface/usuarioActivo.interface';
import { ForgotPasswordDto } from './dto/forgotPassword.dto';

interface RequestWithUser extends Request {
  usuario: {
    email: string;
    rol: string;
  };
}

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  register(
    @Body()
    registerDto: RegisterDto,
  ) {
    try {
      return this.authService.register(registerDto);
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  @Post('login')
  login(
    @Body()
    loginDto: LoginDto,
  ) {
    try {
      return this.authService.login(loginDto);
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  @Get('perfil')
  @Auth(Role.Admin)
  perfil(@UsuarioActivo() usuario: UsuarioActivoInterface) {
    try {
      return this.authService.perfil(usuario);
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  @Post('olvido-password')
  olvidoPassword(
    @Body()
    forgotPasswordDto: ForgotPasswordDto,
  ) {
    try {
      return this.authService.olvidoPassword(forgotPasswordDto);
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }
}
