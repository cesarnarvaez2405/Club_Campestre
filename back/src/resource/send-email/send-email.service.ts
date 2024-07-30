import { Injectable } from '@nestjs/common';
import { CreateSendEmailDto } from './dto/create-send-email.dto';
import { UpdateSendEmailDto } from './dto/update-send-email.dto';
import { MailerService } from '@nestjs-modules/mailer';
import { Usuario } from '../usuario/entities/usuario.entity';
import { TercerosInteresado } from '../terceros-interesados/entities/terceros-interesado.entity';

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
    const { email, nombre } = usuario;

    return await this.mailerService
      .sendMail({
        to: email,
        from: 'no.reply@clubcampestre.com',
        subject: 'Bienvenido a nuestra plataforma',
        template: 'creacionUsuario',
        context: {
          email,
          nombre,
        },
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

  async sendTerceroInteresadoNotificacion(
    terceroInteresado: TercerosInteresado,
  ): Promise<Boolean> {
    const { nombre, email, telefono, notas } = terceroInteresado;

    return await this.mailerService
      .sendMail({
        to: process.env.EMAIL_DESTINY_INTERESADO,
        from: 'no.reply@clubcampestre.com',
        subject: `${nombre}, quiere contactarse contigo para mas informacion - Club Campestre Web`,
        template: 'notificacionTerceroInteresado',
        context: {
          email,
          nombre,
          telefono,
          notas,
        },
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

  async sendSugerenciaNotificacion(terceroInteresado: TercerosInteresado) {
    const { nombre, email, telefono, notas } = terceroInteresado;

    const emailDestinos: string[] = JSON.parse(
      process.env.EMAIL_DESTINY_SUGERENCIAS,
    );

    for (const emailDestino of emailDestinos) {
      await this.mailerService
        .sendMail({
          to: emailDestino,
          from: 'no.reply@clubcampestre.com',
          subject: `${nombre}, Realizó una nueva sugerencia - Club Campestre Web`,
          template: 'notificacionSugerencia',
          context: {
            email,
            nombre,
            telefono,
            notas,
          },
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

  async sendOlvidoPasswordEmail(
    token: string,
    usuario: Partial<Usuario>,
  ): Promise<boolean> {
    try {
      const { email } = usuario;
      await this.mailerService.sendMail({
        to: email,
        from: 'cesar.teacher24@gmail.com',
        subject: 'Bienvenido a nuestra plataforma',
        template: 'notificacionTerceroInteresado',
        context: {
          email,
        },
      });
      console.info(`Correo electrónico enviado correctamente`);
      return true;
    } catch (error) {
      console.error('Error al enviar el correo electrónico:');
      console.error(error);
      return false;
    }
  }
}
