import { IsString, IsOptional, IsInt, IsNotEmpty, MaxLength } from 'class-validator';
import { Type } from 'class-transformer';


export class CreateDistrictDto {
    @IsString()
    @IsNotEmpty()
    @MaxLength(100)
    name_Th: string;  // ชื่อจังหวัด ภาษาไทย

    @IsString()
    @IsNotEmpty()
    @MaxLength(100)
    name_En: string;  // ชื่อจังหวัด ภาษาอังกฤษ
    
  
    @IsNotEmpty()
    province_id :number 

    @IsOptional()  // Optional, ผู้ใช้ไม่ต้องใส่
    @IsString()
    @MaxLength(100)
    createdBy?: string;  // คนที่สร้างข้อมูล (ถ้ามี)
    
}
