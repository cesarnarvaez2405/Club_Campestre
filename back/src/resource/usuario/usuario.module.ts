import { Module } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { UsuarioController } from './usuario.controller';
import { DatabaseModule } from 'src/config/configOrm.module';
import { usuarioProviders } from './usuario.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [UsuarioController],
  providers: [...usuarioProviders, UsuarioService],
  exports: [UsuarioService],
})
export class UsuarioModule {}
