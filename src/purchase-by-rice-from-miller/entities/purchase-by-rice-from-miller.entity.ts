import { Miller } from "src/miller/entities/miller.entity";
import { User } from "src/users/entities/user.entity";
import { CreateDateColumn, Entity, JoinColumn, ManyToOne, UpdateDateColumn } from "typeorm";
import { Column } from "typeorm/decorator/columns/Column";
import { PrimaryGeneratedColumn } from "typeorm/decorator/columns/PrimaryGeneratedColumn";

@Entity()
export class PurchaseByRiceFromMiller {
    @PrimaryGeneratedColumn()
    id: string;
  
    @ManyToOne(() => Miller, { eager: true, cascade: true })
    @JoinColumn({ name: 'miller_id' })
    miller: Miller;
  
    @Column()
    quantity: number;
  
    @Column()
    totalQuantity: number;
  
    @Column('decimal', { precision: 10, scale: 2 })
    cost: number;
  
    @Column('decimal', { precision: 10, scale: 2 })
    totalCost: number;
  
    @Column()
    paymentStatus: string;
  
    @Column()
    section: string;
  
    @Column()
    status: string;

    @Column()
    purchaseDate: Date;
  
    @CreateDateColumn()
    createdAt: Date;
  
    @ManyToOne(() => User, { eager: true })
    @JoinColumn({ name: 'created_By' })
    created_By: User;
  
    @UpdateDateColumn()
    updatedAt: Date;
  
    @ManyToOne(() => User, { eager: true })
    @JoinColumn({ name: 'updated_By' })
    updated_By: User;
}
