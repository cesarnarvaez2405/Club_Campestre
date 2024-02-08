import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UsuarioModule } from './resource/usuario/usuario.module';
import { AuthModule } from './resource/auth/auth.module';
import { TagsModule } from './resource/tags/tags.module';
import { NoticiasModule } from './resource/noticias/noticias.module';
import { DocsModule } from './resource/docs/docs.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, process.env.ROUTE_DOCS),
      serveRoot: '/uploads',
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
