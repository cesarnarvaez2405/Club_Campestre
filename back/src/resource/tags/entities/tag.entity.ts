import { entityBase } from 'src/util/entityBase';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'tags' })
export class Tags extends entityBase {
  @Column('character varying', {
    name: 'prefijo_tag',
    unique: true,
    nullable: false,
    length: 10,
  })
  prefijoTag: string;

  @Column({ nullable: false })
  nombre: string;
}
