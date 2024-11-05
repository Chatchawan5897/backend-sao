import { IsString, IsOptional, IsInt, IsNotEmpty, MaxLength } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { CreateProvinceDto } from './create-province.dto';

export class UpdateProvinceDto extends PartialType(CreateProvinceDto) {
    @IsOptional()  // ตัวเลือก
    @IsString()
    @MaxLength(100)
    nameTh?: string;

    @IsOptional()
    @IsString()
    @MaxLength(100)
    nameEN?: string;

    @IsOptional()
    @IsString()
    @MaxLength(100)
    createdBy?: string;

    // createdAt และ updatedAt ไม่จำเป็นต้องมีใน DTO เพราะจะถูกจัดการโดย TypeORM เอง

}
