import { DataSource } from 'typeorm';
import { Doc } from './entities/doc.entity';

export const docsProviders = [
  {
    provide: 'DOCS_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Doc),
    inject: ['DATA_SOURCE'],
  },
];
