import { Tags } from 'src/resource/tags/entities/tag.entity';
import { Usuario } from 'src/resource/usuario/entities/usuario.entity';
import { entityBase } from 'src/util/entityBase';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
} from 'typeorm';

@Entity()
export class Noticia extends entityBase {
  @Column('varchar', { nullable: false })
  titulo: string;

  @Column('varchar', { nullable: false })
  sumario: string;

  @Column({ type: 'text', nullable: false })
  cuerpo: string;

  @Column('varchar', { nullable: false })
  portada: string;

  @Column('boolean', { name: 'esta_activo', nullable: true, default: false })
  estaActivo: boolean;

  @ManyToOne(() => Usuario, ({ rowId }) => rowId, { nullable: false })
  @JoinColumn({ name: 'created_by' })
  usuarioCreacion: Usuario;

  @ManyToOne(() => Usuario, ({ rowId }) => rowId, { nullable: false })
  @JoinColumn({ name: 'updated_by' })
  usuarioModificacion: Usuario;

  @ManyToMany(() => Tags, (tags) => tags.noticias)
  @JoinTable({
    name: 'noticias_tags',
    joinColumn: {
      name: 'noticia_id',
    },
    inverseJoinColumn: {
      name: 'tag_id',
    },
  })
  tags: Tags[];
}
