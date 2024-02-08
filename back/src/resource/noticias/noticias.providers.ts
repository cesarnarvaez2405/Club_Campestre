import { DataSource } from 'typeorm';
import { Noticia } from './entities/noticia.entity';

export const noticiaProviders = [
  {
    provide: 'NOTICIA_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Noticia),
    inject: ['DATA_SOURCE'],
  },
];
