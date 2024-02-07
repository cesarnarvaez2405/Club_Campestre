import { Body, Controller, Get, Post, UseGuards, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { Request } from 'express';
import { Role } from '../common/enums/rol.enum';
import { Auth } from './decorators/auth.decorators';
import { UsuarioActivo } from '../common/decorators/usuarioActivo.decorators';
import { UsuarioActivoInterface } from '../common/interface/usuarioActivo.interface';

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
    return this.authService.register(registerDto);
  }

  @Post('login')
  login(
    @Body()
    loginDto: LoginDto,
  ) {
    return this.authService.login(loginDto);
  }

  @Get('perfil')
  @Auth(Role.Admin)
  perfil(@UsuarioActivo() usuario: UsuarioActivoInterface) {
    return this.authService.perfil(usuario);
  }
}
