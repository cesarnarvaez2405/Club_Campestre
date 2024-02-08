import { Module } from '@nestjs/common';
import { DocsService } from './docs.service';
import { DocsController } from './docs.controller';
import { DatabaseModule } from 'src/config/configOrm.module';
import { docsProviders } from './docs.providers';

@Module({
  controllers: [DocsController],
  providers: [...docsProviders, DocsService],
  imports: [DatabaseModule],
})
export class DocsModule {}
