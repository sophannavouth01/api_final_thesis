import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { User } from 'src/users/entities/user.entity';

@Entity()
export class Miller {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  phone1: string;

  @Column()
  phone2: string;

  @Column()
  phone3: string;

  @Column()
  villageName: string;

  @Column()
  communeName: string;

  @Column()
  districtName: string;

  @Column()
  provinceName: string;

  @Column({ default: false }) // Default status is true (active)
  status: boolean;

  // Relationship with User for created_By
  @ManyToOne(() => User)
  @JoinColumn({ name: 'created_By' })
  created_By: User;

  // Relationship with User for updated_By
  @ManyToOne(() => User)
  @JoinColumn({ name: 'updated_By' })
  updated_By: User;
}
