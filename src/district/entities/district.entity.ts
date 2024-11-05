import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class District {
    @PrimaryGeneratedColumn()
    id: number;  // ID ตำบล
    @Column({ type: 'varchar', length: 100 })
    name_Th: string;  // ชื่อของตำบล
    @Column({ type: 'varchar', length: 100 })
    name_En: string;  // ชื่อของตำบล
    @Column()
    province_id:number;
    @Column({ type: 'varchar', length: 100, nullable: true })
    createdBy: string;  // คนที่สร้างข้อมูล
    @CreateDateColumn({ type: 'timestamp' })
    created_At: Date;  // วันที่สร้างข้อมูล
    @UpdateDateColumn({ type: 'timestamp' })
    updated_At: Date;  // วันที่แก้ไขข้อมูล
    @UpdateDateColumn({ type: 'timestamp'})
    deleted_At: Date; // วันที่ลบ 

}
