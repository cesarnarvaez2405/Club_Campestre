import { Module } from '@nestjs/common';
import { SendEmailService } from './send-email.service';
import { SendEmailController } from './send-email.controller';
import { MailerModule } from '@nestjs-modules/mailer';
import { PugAdapter } from '@nestjs-modules/mailer/dist/adapters/pug.adapter';

@Module({
  controllers: [SendEmailController],
  providers: [SendEmailService],
  exports: [SendEmailService],
})
export class SendEmailModule {}
