import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  InternalServerErrorException,
} from '@nestjs/common';
import { TercerosInteresadosService } from './terceros-interesados.service';
import { CreateTercerosInteresadoDto } from './dto/create-terceros-interesado.dto';
import { UpdateTercerosInteresadoDto } from './dto/update-terceros-interesado.dto';

@Controller('terceros-interesados')
export class TercerosInteresadosController {
  constructor(
    private readonly tercerosInteresadosService: TercerosInteresadosService,
  ) {}

  @Post()
  create(@Body() createTercerosInteresadoDto: CreateTercerosInteresadoDto) {
    try {
      return this.tercerosInteresadosService.create(
        createTercerosInteresadoDto,
      );
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  @Get()
  findAll() {
    return this.tercerosInteresadosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tercerosInteresadosService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTercerosInteresadoDto: UpdateTercerosInteresadoDto,
  ) {
    return this.tercerosInteresadosService.update(
      +id,
      updateTercerosInteresadoDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tercerosInteresadosService.remove(+id);
  }
}
