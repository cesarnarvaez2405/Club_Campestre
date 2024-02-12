import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
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
  create(@Body() createNoticiaDto: CreateNoticiaDto) {
    return this.noticiasService.create(createNoticiaDto);
  }

  @Get()
  @Auth(Role.Admin)
  findAll() {
    return this.noticiasService.findAll();
  }

  @Get('buscar-personalizado')
  buscarNoticiasPersonalizado(@Query() query: any) {
    const { registros } = query;
    return this.noticiasService.findAll({
      select: {
        rowId: true,
        titulo: true,
        tags: true,
        fechaCreacion: true,
        fechaModificacion: true,
        portada: true,
      },
      order: {
        fechaCreacion: 'DESC', // Ordenar por fechaCreacion de forma descendente
      },
      take: registros,
    });
  }

  @Get(':rowId')
  @Auth(Role.Admin)
  findOne(@Param('rowId') rowId: number) {
    return this.noticiasService.findOne(+rowId);
  }

  @Patch(':rowId')
  @Auth(Role.Admin)
  update(
    @Param('rowId') rowId: number,
    @Body() updateNoticiaDto: UpdateNoticiaDto,
  ) {
    return this.noticiasService.update(+rowId, updateNoticiaDto);
  }

  @Delete(':rowId')
  @Auth(Role.Admin)
  remove(@Param('rowId') rowId: number) {
    return this.noticiasService.remove(+rowId);
  }
}
