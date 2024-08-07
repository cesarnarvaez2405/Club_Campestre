import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Repository } from 'typeorm';
import { Usuario } from './entities/usuario.entity';
import { SendEmailService } from '../send-email/send-email.service';

@Injectable()
export class UsuarioService {
  constructor(
    @Inject('USUARIO_REPOSITORY')
    private readonly usuarioRepository: Repository<Usuario>,
    private readonly sendEmailService: SendEmailService,
  ) {}
  async create(createUsuarioDto: CreateUsuarioDto) {
    const usuario = this.usuarioRepository.create(createUsuarioDto);
    await this.sendEmailService.sendUserConfirmation(usuario);
    return await this.usuarioRepository.save(usuario);
  }

  async findAll() {
    return await this.usuarioRepository.find({
      select: ['email', 'estaActivo', 'nombre', 'rol', 'rowId'],
    });
  }

  async findOne(rowId: number, options?: any): Promise<Usuario> {
    const usuario = await this.usuarioRepository.findOne({
      where: { rowId },
    });
    if (!usuario) {
      throw new NotFoundException('No se encuentra el usuario');
    }
    return usuario;
  }

  async buscarPorIdPublico(rowId: number, options?: any) {
    const usuario = await this.usuarioRepository.findOne({
      where: {
        rowId,
      },
      ...options,
    });
    if (!usuario) {
      throw new NotFoundException('No se encuentra el usuario');
    }
    return usuario;
  }

  async buscarPorEmail(email: string): Promise<Usuario> {
    const usuario = await this.usuarioRepository.findOne({
      where: { email },
    });

    if (!usuario) {
      throw new NotFoundException('No encuentra registro');
    }

    return usuario;
  }

  async buscarPerfil(options?: any) {
    const usuario = await this.usuarioRepository.findOne({
      ...options,
    });
    if (!usuario) {
      throw new NotFoundException('El usuario no se encuentra registrado');
    }
    return usuario;
  }

  async buscarUsuarioPorEmail(email: string): Promise<Usuario | null> {
    const usuario = await this.usuarioRepository.findOne({
      where: { email },
    });

    if (!usuario) {
      return null;
    }

    return usuario;
  }

  async update(rowId: number, actualizar: UpdateUsuarioDto) {
    const usuario = await this.findOne(rowId);
    this.usuarioRepository.merge(usuario, actualizar);
    return await this.usuarioRepository.save(usuario);
  }

  async remove(rowId: number): Promise<any> {
    await this.findOne(rowId);
    return await this.usuarioRepository.delete(rowId);
  }
}
