import { Module } from '@nestjs/common';
import { TercerosInteresadosService } from './terceros-interesados.service';
import { TercerosInteresadosController } from './terceros-interesados.controller';
import { DatabaseModule } from 'src/config/configOrm.module';
import { terceroInteresadoProviders } from './terceros-interesados.providers';
import { SendEmailService } from '../send-email/send-email.service';

@Module({
  imports: [DatabaseModule],
  controllers: [TercerosInteresadosController],
  providers: [
    ...terceroInteresadoProviders,
    TercerosInteresadosService,
    SendEmailService,
  ],
  exports: [TercerosInteresadosService],
})
export class TercerosInteresadosModule {}
