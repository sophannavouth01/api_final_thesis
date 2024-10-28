import { Agent } from "src/agent/entities/agent.entity";
import { Branch } from "src/branch/entities/branch.entity";
import { Customer } from "src/customer/entities/customer.entity";
import { Miller } from "src/miller/entities/miller.entity";
import { User } from "src/users/entities/user.entity";
import { CreateDateColumn, Entity, JoinColumn, ManyToOne, UpdateDateColumn } from "typeorm";
import { Column } from "typeorm/decorator/columns/Column";
import { PrimaryGeneratedColumn } from "typeorm/decorator/columns/PrimaryGeneratedColumn";

@Entity()
export class PurchaseByRiceFromMiller {
    @PrimaryGeneratedColumn()
    id: string;
  
    @ManyToOne(() => Miller, { eager: true, cascade: true, nullable: true })
    @JoinColumn({ name: 'miller_id' })
    miller: Miller | null;
  
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

    @ManyToOne(() => Branch, { eager: true, cascade: true, nullable: true })
    @JoinColumn({ name: 'branch_id' })
    branch: Branch | null;

    @ManyToOne(() => Agent, { eager: true, cascade: true, nullable: true })
    @JoinColumn({ name: 'agent_id' })
    agent: Agent | null;

    
    @ManyToOne(() => Customer, { eager: true, cascade: true, nullable: true })
    @JoinColumn({ name: 'customer_id' })
    customer: Customer | null;
  
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
