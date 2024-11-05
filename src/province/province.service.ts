import {
  Injectable,
  NotFoundException,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProvinceDto } from './dto/create-province.dto';
import { UpdateProvinceDto } from './dto/update-province.dto';
import { createResponse } from '../../response.uils';
import { Province } from './entities/province.entity';

@Injectable()
export class ProvinceService {
  constructor(
    @InjectRepository(Province)
    private readonly provinceRepository: Repository<Province>, // Inject Province repository
  ) {}

  async create(createProvinceDto: CreateProvinceDto) {
    try {
      // สร้าง instance ของ Province entity จากข้อมูลที่รับมาจาก DTO
      const province = await this.provinceRepository.create(createProvinceDto);
      // บันทึกข้อมูลจังหวัดลงในฐานข้อมูล
      const toCreate = await this.provinceRepository.save(province);

      return createResponse(
        201,
        'province created successfully',
        toCreate,
        '/province',
        'POST',
      );
    } catch (error) {
      throw new Error('Error while saving province to database');
    }
  }

  // ฟังก์ชันสำหรับดึงข้อมูลจังหวัดทั้งหมด
  async findAll() {
    return this.provinceRepository.find(); // ใช้ method find() ของ repository
  }
  // สำหรับดึงข้อมูล จาก id  รายการเดียว first
  async findOne(id: number) {
    return this.provinceRepository.findOne({ where: { id } });
  }

  async update(id: number, updateProvinceDto: UpdateProvinceDto) {
    // ค้นหาข้อมูลจังหวัดที่ต้องการอัพเดท
    const province = await this.provinceRepository.findOne({ where: { id } });
    if (!province) {
      // ไม่มีค่า error
      throw new NotFoundException(`province with ID ${id} not found`);
    }
    // อัพเดทข้อมูลใน object province
    const updateResult = await this.provinceRepository.update(
      id,
      updateProvinceDto,
    );
    // ถ้าการอัพเดทไม่สำเร็จให้ throw error
    if (updateResult.affected === 0) {
      throw new InternalServerErrorException('Update failed');
    }
    // คืนค่าผลลัพธ์ที่อัพเดทแล้ว
    return await this.provinceRepository.findOne({ where: { id } });
  }

  remove(id: number) {
    return `This action removes a #${id} province`;
  }
}
