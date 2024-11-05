import { IsString, IsOptional, IsInt, IsNotEmpty, MaxLength } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateSubdistrictDto {
 
    @MaxLength(20)
    zip_code: number;
    @IsString()
    @IsNotEmpty()
    @MaxLength(100)
    name_Th: string; 
    @IsString()
    @IsNotEmpty()
    @MaxLength(100)
    name_En: string; 
    @MaxLength(100)
    amphure_id:number;
    @IsString()
    @MaxLength(100)
    createdBy?: string;  // คนที่สร้างข้อมูล (ถ้ามี)


}
