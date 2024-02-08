import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TagsService } from './tags.service';
import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';
import { Auth } from '../auth/decorators/auth.decorators';
import { Role } from '../common/enums/rol.enum';

@Controller('tags')
export class TagsController {
  constructor(private readonly tagsService: TagsService) {}

  @Post()
  @Auth(Role.Admin)
  async create(@Body() createTagDto: CreateTagDto) {
    try {
      return await this.tagsService.create(createTagDto);
    } catch (error) {
      console.error(error);
    }
  }

  @Get()
  @Auth(Role.Admin)
  async findAll() {
    try {
      const tags = await this.tagsService.findAll({
        order: { rowId: 'ASC' },
      });
      return tags;
    } catch (error) {
      console.error(error);
    }
  }

  @Get(':rowId')
  @Auth(Role.Admin)
  findOne(@Param('rowId') rowId: number) {
    return this.tagsService.findOne(+rowId);
  }

  @Patch(':rowId')
  @Auth(Role.Admin)
  update(@Param('rowId') rowId: number, @Body() updateTagDto: UpdateTagDto) {
    return this.tagsService.update(+rowId, updateTagDto);
  }

  @Delete(':rowId')
  @Auth(Role.Admin)
  remove(@Param('rowId') rowId: number) {
    return this.tagsService.remove(+rowId);
  }
}
