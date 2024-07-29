import { Inject, Injectable } from '@nestjs/common';
import { CreateTercerosInteresadoDto } from './dto/create-terceros-interesado.dto';
import { UpdateTercerosInteresadoDto } from './dto/update-terceros-interesado.dto';
import { Repository } from 'typeorm';
import { TercerosInteresado } from './entities/terceros-interesado.entity';
import { SendEmailService } from '../send-email/send-email.service';

@Injectable()
export class TercerosInteresadosService {
  constructor(
    @Inject('TERCEROS_INTERESADOS_REPOSITORY')
    private readonly terceroInteresadoRepository: Repository<TercerosInteresado>,
    private readonly sendEmailService: SendEmailService,
  ) {}

  async create(
    createTercerosInteresadoDto: CreateTercerosInteresadoDto,
  ): Promise<TercerosInteresado> {
    const terceroInteresado = this.terceroInteresadoRepository.create(
      createTercerosInteresadoDto,
    );
    await this.sendEmailService.sendTerceroInteresadoNotificacion(
      terceroInteresado,
    );
    return await this.terceroInteresadoRepository.save(terceroInteresado);
  }

  async crearSugerencia(
    createTercerosInteresadoDto: CreateTercerosInteresadoDto,
  ) {
    const terceroInteresado = this.terceroInteresadoRepository.create(
      createTercerosInteresadoDto,
    );
    await this.sendEmailService.sendSugerenciaNotificacion(terceroInteresado);
  }

  findAll() {
    return `This action returns all tercerosInteresados`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tercerosInteresado`;
  }

  update(id: number, updateTercerosInteresadoDto: UpdateTercerosInteresadoDto) {
    return `This action updates a #${id} tercerosInteresado`;
  }

  remove(id: number) {
    return `This action removes a #${id} tercerosInteresado`;
  }
}
