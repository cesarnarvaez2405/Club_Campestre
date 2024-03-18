import { UseGuards, applyDecorators } from '@nestjs/common';
import { Role } from '../../common/enums/rol.enum';
import { Roles } from './roles.decorators';
import { AuthGuard } from '../guard/auth.guard';
import { RolesGuard } from '../guard/roles.guard';

export function Auth(rol?: Role) {
  return applyDecorators(Roles(rol), UseGuards(AuthGuard, RolesGuard));
}
