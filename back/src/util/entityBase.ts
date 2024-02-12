import {
  BaseEntity,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export class entityBase extends BaseEntity {
  @PrimaryGeneratedColumn()
  rowId: number;

  @CreateDateColumn({ name: 'created_at' })
  fechaCreacion: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  fechaModificacion: Date;
}
