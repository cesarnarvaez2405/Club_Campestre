import { Noticia } from 'src/resource/noticias/entities/noticia.entity';
import { entityBase } from 'src/util/entityBase';
import { Column, Entity, ManyToMany } from 'typeorm';

@Entity({ name: 'tags' })
export class Tags extends entityBase {
  @Column('varchar', {
    name: 'prefijo_tag',
    unique: true,
    nullable: false,
    length: 10,
  })
  prefijoTag: string;

  @Column({ nullable: false })
  nombre: string;

  @ManyToMany(() => Noticia, (noticia) => noticia.tags)
  noticias: Noticia[];
}
