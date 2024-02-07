import { Inject, Injectable } from '@nestjs/common';
import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';
import { Repository } from 'typeorm';
import { Tags } from './entities/tag.entity';

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

  findOne(id: number) {
    return `This action returns a #${id} tag`;
  }

  update(id: number, updateTagDto: UpdateTagDto) {
    return `This action updates a #${id} tag`;
  }

  remove(id: number) {
    return `This action removes a #${id} tag`;
  }
}
