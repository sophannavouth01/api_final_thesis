import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Miller } from 'src/miller/entities/miller.entity';

@Entity()
export class TotalStock {
  @PrimaryGeneratedColumn()
  id: string;

  // Quantity for individual stock entries
  @Column('decimal', { precision: 10, scale: 2, default: 0 })
  Quantity: number;

  // Cumulative total quantity
  @Column('decimal', { precision: 10, scale: 2, default: 0 })
  totalQuantity: number;

  // Cumulative total cost
  @Column('decimal', { precision: 10, scale: 2, default: 0 })
  totalCost: number;

  @ManyToOne(() => Miller, { eager: true })
  @JoinColumn({ name: 'miller_id' })
  miller: Miller;
}
