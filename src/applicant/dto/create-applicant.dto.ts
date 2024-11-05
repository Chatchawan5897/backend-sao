import { IsString, IsOptional, IsInt, IsNotEmpty, MaxLength, IsEmail, Matches } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateApplicantDto {
  
    @IsString()  // ตรวจสอบว่าเป็น string
    @IsNotEmpty()  // ห้ามเป็นค่าว่าง
    @MaxLength(50)  // ความยาวไม่เกิน 50 ตัวอักษร
    firstName: string;
    
    @IsString()  // ตรวจสอบว่าเป็น string
    @IsNotEmpty()  // ห้ามเป็นค่าว่าง
    @MaxLength(50)  // ความยาวไม่เกิน 50 ตัวอักษร
    lastName: string;
  
    @IsOptional()  // สามารถเว้นว่างได้
    @IsString()  // ตรวจสอบว่าเป็น string
    gender: string;

    @IsNotEmpty()  // ห้ามเป็นค่าว่าง
    @IsString()  // ตรวจสอบว่าเป็น string
    @Matches(/^\d{13}$/, { message: 'idCard must be 13 digits' })  // ตรวจสอบว่าเป็นเลข 13 หลัก
    idCard: string;

    @IsString()  // ตรวจสอบว่าเป็น string
    @IsNotEmpty()  // ห้ามเป็นค่าว่าง
    nationality: string;
    
    @IsOptional()  // สามารถเว้นว่างได้
    @IsString()  // ตรวจสอบว่าเป็น string
    phone: string;

    @IsEmail()  // ตรวจสอบว่าเป็นรูปแบบอีเมล
    @IsNotEmpty()  // ห้ามเป็นค่าว่าง
    email: string;

    @IsOptional()  // สามารถเว้นว่างได้
    @IsString()  // ตรวจสอบว่าเป็น string
    address: string;

    @IsInt()  // ตรวจสอบว่าเป็นจำนวนเต็ม
    @IsNotEmpty()  // ห้ามเป็นค่าว่าง
    @Type(() => Number)  // แปลงค่าเป็นจำนวนเต็ม
    province_id: number;

    @IsInt()  // ตรวจสอบว่าเป็นจำนวนเต็ม
    @IsNotEmpty()  // ห้ามเป็นค่าว่าง
    @Type(() => Number)  // แปลงค่าเป็นจำนวนเต็ม
    district_id: number;
    
    @IsInt()  // ตรวจสอบว่าเป็นจำนวนเต็ม
    @IsNotEmpty()  // ห้ามเป็นค่าว่าง
    @Type(() => Number)  // แปลงค่าเป็นจำนวนเต็ม
    subdistrict_id: number;
}
