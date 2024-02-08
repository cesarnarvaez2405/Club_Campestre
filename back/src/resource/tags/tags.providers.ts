import { DataSource } from 'typeorm';
import { Tags } from './entities/tag.entity';

export const tagProviders = [
  {
    provide: 'TAGS_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Tags),
    inject: ['DATA_SOURCE'],
  },
];
