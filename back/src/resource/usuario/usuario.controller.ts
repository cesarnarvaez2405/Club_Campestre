import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ForbiddenException,
  NotFoundException,
  HttpCode,
  InternalServerErrorException,
} from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Auth } from '../auth/decorators/auth.decorators';
import { Role } from '../common/enums/rol.enum';

@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Post()
  create(@Body() createUsuarioDto: CreateUsuarioDto) {
    return this.usuarioService.create(createUsuarioDto);
  }

  @Get()
  @Auth()
  findAll() {
    return this.usuarioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usuarioService.findOne(+id);
  }

  @Patch(':rowId')
  @Auth(Role.Admin)
  @HttpCode(204)
  update(
    @Param('rowId') rowId: string,
    @Body() updateUsuarioDto: UpdateUsuarioDto,
  ) {
    return this.usuarioService.update(parseInt(rowId), updateUsuarioDto);
  }

  @Delete(':rowId')
  @Auth(Role.Admin)
  @HttpCode(204)
  remove(@Param('rowId') rowId: number) {
    try {
      this.usuarioService.remove(+rowId);
      return null;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
}
