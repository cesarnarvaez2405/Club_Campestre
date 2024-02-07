import { Module } from '@nestjs/common';
import { TagsService } from './tags.service';
import { TagsController } from './tags.controller';
import { DatabaseModule } from 'src/config/configOrm.module';
import { tagProviders } from './tags.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [TagsController],
  providers: [...tagProviders, TagsService],
})
export class TagsModule {}
