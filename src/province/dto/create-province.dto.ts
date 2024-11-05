import { IsString, IsOptional, IsInt, IsNotEmpty, MaxLength } from 'class-validator';
import { Type } from 'class-transformer';
// ไฟล์นี้ใช้ในการกำหนดรูปแบบของข้อมูลที่ผู้ใช้ต้องส่งมาสำหรับการสร้างจังหวัดใหม่ (POST request) 
//ข้อมูลใน DTO นี้จะถูกตรวจสอบก่อนที่จะนำไปใช้ในการสร้าง entity (เช่น จังหวัด) ในฐานข้อมูล
export class CreateProvinceDto {
    @IsString()
    @IsNotEmpty()
    @MaxLength(100)
    name_Th: string;  // ชื่อจังหวัด ภาษาไทย

    @IsString()
    @IsNotEmpty()
    @MaxLength(100)
    name_En: string;  // ชื่อจังหวัด ภาษาอังกฤษ

    @IsOptional()  // Optional, ผู้ใช้ไม่ต้องใส่
    @IsString()
    @MaxLength(100)
    createdBy?: string;  // คนที่สร้างข้อมูล (ถ้ามี)

    // createdAt และ updatedAt ไม่จำเป็นต้องมีใน DTO เพราะจะถูกจัดการโดย TypeORM เอง
}
