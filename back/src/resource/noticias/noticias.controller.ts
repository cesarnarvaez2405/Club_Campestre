import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  InternalServerErrorException,
  Res,
  HttpCode,
} from '@nestjs/common';
import { NoticiasService } from './noticias.service';
import { CreateNoticiaDto } from './dto/create-noticia.dto';
import { UpdateNoticiaDto } from './dto/update-noticia.dto';
import { Auth } from '../auth/decorators/auth.decorators';
import { Role } from '../common/enums/rol.enum';

@Controller('noticias')
export class NoticiasController {
  constructor(private readonly noticiasService: NoticiasService) {}

  @Post()
  @Auth(Role.Admin)
  async create(@Body() createNoticiaDto: CreateNoticiaDto) {
    return this.noticiasService.create(createNoticiaDto);
  }

  @Get()
  async findAll() {
    return this.noticiasService.findAll({
      relations: ['tags', 'usuarioCreacion', 'usuarioModificacion'],
    });
  }

  @Get('buscar-personalizado')
  async buscarNoticiasPersonalizado(@Query() query: any) {
    const { registros } = query;
    return this.noticiasService.findAll({
      select: {
        rowId: true,
        titulo: true,
        tags: true,
        sumario: true,
        fechaCreacion: true,
        fechaModificacion: true,
        portada: true,
        estaActivo: true,
      },
      order: {
        fechaCreacion: 'DESC', // Ordenar por fechaCreacion de forma descendente
      },
      where: {
        estaActivo: true,
      },
      take: registros,
    });
  }

  @Get(':rowId')
  async findOne(@Param('rowId') rowId: number) {
    try {
      return this.noticiasService.findOne(+rowId, {
        relations: ['tags', 'usuarioCreacion'],
      });
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  @Patch(':rowId')
  @Auth(Role.Admin)
  @HttpCode(204)
  async update(
    @Param('rowId') rowId: number,
    @Body() updateNoticiaDto: UpdateNoticiaDto,
  ) {
    try {
      return this.noticiasService.update(+rowId, updateNoticiaDto);
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  @Delete(':rowId')
  @Auth(Role.Admin)
  @HttpCode(204)
  async remove(@Param('rowId') rowId: number) {
    try {
      return this.noticiasService.remove(+rowId);
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
}
