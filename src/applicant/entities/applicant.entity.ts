import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity()
export class Applicant {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  gender: string;

  @Column()
  idCard: string;

  @Column()
  nationality: string;

  @Column()
  phone: string;

  @Column()
  email: string;
  @Column()
  address: string;
  @Column()
  province_id: number;
  @Column()
  district_id: number;
  @Column()
  subdistrict_id: number;

  @Column({ type: 'varchar', length: 100, nullable: true })
  createdBy: string; // คนที่สร้างข้อมูล
  @CreateDateColumn({ type: 'timestamp' })
  created_At: Date; // วันที่สร้างข้อมูล
  @UpdateDateColumn({ type: 'timestamp' })
  updated_At: Date; // วันที่แก้ไขข้อมูล
  @UpdateDateColumn({ type: 'timestamp' })
  deleted_At: Date; // วันที่ลบ
}
