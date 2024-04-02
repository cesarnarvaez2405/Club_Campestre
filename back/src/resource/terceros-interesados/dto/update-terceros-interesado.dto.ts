import { PartialType } from '@nestjs/mapped-types';
import { CreateTercerosInteresadoDto } from './create-terceros-interesado.dto';

export class UpdateTercerosInteresadoDto extends PartialType(CreateTercerosInteresadoDto) {}
