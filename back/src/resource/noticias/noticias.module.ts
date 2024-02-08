import { Module } from '@nestjs/common';
import { NoticiasService } from './noticias.service';
import { NoticiasController } from './noticias.controller';
import { DatabaseModule } from 'src/config/configOrm.module';
import { noticiaProviders } from './noticias.providers';
import { TagsModule } from '../tags/tags.module';

@Module({
  imports: [TagsModule, DatabaseModule],
  controllers: [NoticiasController],
  providers: [...noticiaProviders, NoticiasService],
})
export class NoticiasModule {}
