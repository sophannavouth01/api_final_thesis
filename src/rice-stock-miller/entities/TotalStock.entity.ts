import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class TotalStock {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('decimal', { precision: 10, scale: 2, default: 0 })
  totalQuantity: number;

  @Column('decimal', { precision: 10, scale: 2, default: 0 })
  totalCost: number;

  @Column()
  stockType: string;  // You can categorize by type, e.g., rice, wheat, etc.
}
