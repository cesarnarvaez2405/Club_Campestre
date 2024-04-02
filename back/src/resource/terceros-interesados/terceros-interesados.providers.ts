import { DataSource } from 'typeorm';
import { TercerosInteresado } from './entities/terceros-interesado.entity';

export const terceroInteresadoProviders = [
  {
    provide: 'TERCEROS_INTERESADOS_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(TercerosInteresado),
    inject: ['DATA_SOURCE'],
  },
];
