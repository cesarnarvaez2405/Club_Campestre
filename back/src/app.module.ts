import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UsuarioModule } from './resource/usuario/usuario.module';
import { AuthModule } from './resource/auth/auth.module';
import { TagsModule } from './resource/tags/tags.module';
import { NoticiasModule } from './resource/noticias/noticias.module';
import { DocsModule } from './resource/docs/docs.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    UsuarioModule,
    AuthModule,
    TagsModule,
    NoticiasModule,
    DocsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
