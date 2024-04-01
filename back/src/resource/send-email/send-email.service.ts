import { Injectable } from '@nestjs/common';
import { CreateSendEmailDto } from './dto/create-send-email.dto';
import { UpdateSendEmailDto } from './dto/update-send-email.dto';
import { MailerService } from '@nestjs-modules/mailer';
import { join } from 'path';
import { Usuario } from '../usuario/entities/usuario.entity';

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

  async sendUserConfirmation(usuario: Usuario): Promise<Boolean> {
    const { email } = usuario;

    return await this.mailerService
      .sendMail({
        to: email,
        from: 'cesar.teacher24@gmail.com',
        subject: 'Bienvenido a nuestra plataforma',
        template: 'creacionUsuario', //ruta a la plantilla
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
