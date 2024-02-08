import { Inject, Injectable } from '@nestjs/common';
import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';
import { Repository } from 'typeorm';
import { Tags } from './entities/tag.entity';
import { NotFoundError } from 'src/util/NotFoundError';

@Injectable()
export class TagsService {
  constructor(
    @Inject('TAGS_REPOSITORY')
    private readonly tagRepository: Repository<Tags>,
  ) {}

  async create(createTagDto: CreateTagDto): Promise<Tags> {
    const tag = this.tagRepository.create(createTagDto);
    return await this.tagRepository.save(tag);
  }

  async findAll(options?: any): Promise<Tags[]> {
    return await this.tagRepository.find({
      ...options,
    });
  }

  async findOne(rowId: number, options?: any): Promise<Tags> {
    const tag = this.tagRepository.findOne({
      where: { rowId },
      ...options,
    });
    if (!tag) {
      throw new NotFoundError('No encuentra registro');
    }
    return tag;
  }

  async update(rowId: number, datos: UpdateTagDto): Promise<Tags> {
    const tag = await this.findOne(rowId);
    this.tagRepository.merge(tag, datos);
    return await this.tagRepository.save(tag);
  }

  async remove(rowId: number): Promise<any> {
    await this.findOne(rowId);
    return await this.tagRepository.delete(rowId);
  }
}
