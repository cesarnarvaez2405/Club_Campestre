import { Inject, Injectable, Logger, NotFoundException } from '@nestjs/common';
import { CreateNoticiaDto } from './dto/create-noticia.dto';
import { UpdateNoticiaDto } from './dto/update-noticia.dto';
import { Repository } from 'typeorm';
import { Noticia } from './entities/noticia.entity';
import { Usuario } from '../usuario/entities/usuario.entity';
import { TagsService } from '../tags/tags.service';
import { Cron } from '@nestjs/schedule';

@Injectable()
export class NoticiasService {
  private readonly logger = new Logger(NoticiasService.name);

  constructor(
    @Inject('NOTICIA_REPOSITORY')
    private readonly noticiaRepository: Repository<Noticia>,
    private readonly tagService: TagsService,
  ) {}

  async create(createNoticiaDto: CreateNoticiaDto): Promise<Noticia> {
    const tags = await this.tagService.buscarPorIds(createNoticiaDto.tagsIds);
    const noticia = this.noticiaRepository.create({
      ...createNoticiaDto,
      usuarioCreacion: { rowId: createNoticiaDto.usuarioCreacionId } as Usuario,
      usuarioModificacion: {
        rowId: createNoticiaDto.usuarioModificacionId,
      } as Usuario,
      tags,
    });
    return await this.noticiaRepository.save(noticia);
  }

  async findAll(options?: any): Promise<Noticia[]> {
    return await this.noticiaRepository.find({
      ...options,
    });
  }

  async findOne(rowId: number, options?: any): Promise<Noticia> {
    const noticia = await this.noticiaRepository.findOne({
      where: { rowId },
      ...options,
    });
    if (!noticia) {
      throw new NotFoundException('No se encuentra la noticia');
    }

    return noticia;
  }

  @Cron('*/10 * * * *')
  async tareaBuscarNoticias(options?: any) {
    this.logger.debug('Tarea programada //tareaBuscarNoticias// Iniciada');
    await this.findAll({
      take: 3,
      where: {
        estaActivo: true,
      },
    });

    this.logger.debug('Tarea programada //tareaBuscarNoticias// Finalizada');
  }

  async update(rowId: number, datos: UpdateNoticiaDto): Promise<Noticia> {
    const noticia = await this.findOne(rowId);
    if (datos.tagsIds) {
      const tags = await this.tagService.buscarPorIds(datos.tagsIds);
      noticia.tags = tags;
    }
    this.noticiaRepository.merge(noticia, datos);
    return await this.noticiaRepository.save(noticia);
  }

  async remove(rowId: number): Promise<any> {
    await this.findOne(rowId);
    return await this.noticiaRepository.delete(rowId);
  }
}
