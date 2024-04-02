import { entityBase } from 'src/util/entityBase';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'terceros-interesados' })
export class TercerosInteresado extends entityBase {
  @Column({ nullable: false })
  nombre: string;

  @Column({ nullable: false })
  email: string;

  @Column({ type: 'numeric', nullable: false })
  telefono: number;

  @Column({ nullable: true })
  notas: string;
}
