import {
  Injectable,
  BadRequestException,
  UnauthorizedException,
} from '@nestjs/common';
import { UsuarioService } from '../usuario/usuario.service';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { SendEmailService } from '../send-email/send-email.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly usuarioService: UsuarioService,
    private readonly jwtService: JwtService,
    private readonly sendEmailService: SendEmailService,
  ) {}

  async register(registro) {
    const { email } = registro;
    const tieneEmail = await this.usuarioService.buscarUsuarioPorEmail(email);
    if (tieneEmail) {
      throw new BadRequestException('Usuario ya existe');
    }
    registro.password = await bcrypt.hash(registro.password, 10);
    return await this.usuarioService.create(registro);
  }

  async login(login) {
    const { email, password } = login;
    const tieneEmail = await this.usuarioService.buscarUsuarioPorEmail(email);
    if (!tieneEmail) {
      throw new BadRequestException('Usuario no esta registrado');
    }
    const passwordValido = await bcrypt.compare(password, tieneEmail.password);
    if (!passwordValido) {
      throw new UnauthorizedException('La contraseña es incorrecta');
    }
    const payload = {
      email: tieneEmail.email,
      rol: tieneEmail.rol,
      rowId: tieneEmail.rowId,
      nombre: tieneEmail.nombre,
    };
    const token = await this.jwtService.signAsync(payload);

    return {
      token,
      payload,
    };
  }

  async perfil(perfil) {
    const { email } = perfil;
    return await this.usuarioService.buscarPerfil({
      where: { email },
      select: {
        rowId: true,
        nombre: true,
        rol: true,
        email: true,
      },
    });
  }

  async olvidoPassword(body) {
    const { email } = body;
    const usuario = await this.usuarioService.buscarPorEmail(email);
    const payload = { rowId: usuario.rowId, email: usuario.email };
    const token = await this.jwtService.signAsync(payload);
    return await this.sendEmailService.sendOlvidoPasswordEmail(token, payload);
  }
}
