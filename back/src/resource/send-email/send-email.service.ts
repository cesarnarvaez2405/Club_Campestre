import { Injectable } from '@nestjs/common';
import { CreateSendEmailDto } from './dto/create-send-email.dto';
import { UpdateSendEmailDto } from './dto/update-send-email.dto';
import { MailerService } from '@nestjs-modules/mailer';
import { join } from 'path';

@Injectable()
export class SendEmailService {
  constructor(private mailerService: MailerService) {}

  create(createSendEmailDto: CreateSendEmailDto) {
    return 'This action adds a new sendEmail';
  }

  findAll() {
    return `This action returns all sendEmail`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sendEmail`;
  }

  update(id: number, updateSendEmailDto: UpdateSendEmailDto) {
    return `This action updates a #${id} sendEmail`;
  }

  remove(id: number) {
    return `This action removes a #${id} sendEmail`;
  }

  async sendUserConfirmation(): Promise<Boolean> {
    return await this.mailerService
      .sendMail({
        to: 'desarrolladorerpsoftware8.itm@gmail.com',
        from: 'cesar.teacher24@gmail.com',
        subject: 'Bienvenido a nuestra plataforma',
        template: './templates/creacionUsuario/html.pug',
      })
      .then(() => {
        console.info(`email se envio correctamente`);
        return true;
      })
      .catch((error) => {
        console.error('Email-No-enviado****-=====>>>');
        console.error(error);
        return false;
      });
  }
}
