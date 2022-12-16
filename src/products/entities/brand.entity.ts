import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

export class Brand {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'varchar', length: 64, unique: true })
  name: string;
  @Column({ type: 'varchar', length: 1024 })
  image: string;
}
