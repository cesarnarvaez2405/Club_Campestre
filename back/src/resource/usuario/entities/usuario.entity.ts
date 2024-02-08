import { entityBase } from 'src/util/entityBase';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'usuarios' })
export class Usuario extends entityBase {
  @Column({ unique: true, nullable: false })
  email: string;

  @Column()
  nombre: string;

  @Column({ nullable: false })
  password: string;

  @Column({ nullable: false, default: 'admin' })
  rol: string;

  @Column({ name: 'esta_activo' })
  estaActivo: boolean;
}
