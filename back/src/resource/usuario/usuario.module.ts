import { Module } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { UsuarioController } from './usuario.controller';
import { DatabaseModule } from 'src/config/configOrm.module';
import { usuarioProviders } from './usuario.providers';
import { SendEmailService } from '../send-email/send-email.service';

@Module({
  imports: [DatabaseModule],
  controllers: [UsuarioController],
  providers: [...usuarioProviders, UsuarioService, SendEmailService],
  exports: [UsuarioService],
})
export class UsuarioModule {}
