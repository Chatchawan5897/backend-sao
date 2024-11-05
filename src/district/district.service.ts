import {
  Injectable,
  NotFoundException,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDistrictDto } from './dto/create-district.dto';
import { UpdateDistrictDto } from './dto/update-district.dto';
import { District } from './entities/district.entity';
import { createResponse } from '../../response.uils';

@Injectable()
export class DistrictService {
  constructor(
    @InjectRepository(District)
    private readonly districtRepository: Repository<District>,
  ) {}

  async create(createDistrictDto: CreateDistrictDto) {
    try {
      const district = await this.districtRepository.create(createDistrictDto);
      const toCreate = await this.districtRepository.save(district);
      return createResponse(
        201,
        'district created successfully',
        toCreate,
        '/district',
        'POST',
      );
    } catch (error) {
      throw new Error('Error while saving District to database');
    }
  }

  async findAll() {
    return await this.districtRepository.find();
  }

  async findOne(id: number) {
    return await this.districtRepository.findOne({ where: { id } });
  }

  async update(id: number, updateDistrictDto: UpdateDistrictDto) {
    // ค้นหาข้อมูลเดิมก่อน
    const district = await this.districtRepository.findOne({ where: { id } });
    if (!district) {
      // ถ้าไม่พบข้อมูลให้ throw NotFoundException
      throw new NotFoundException(`District with ID ${id} not found`);
    }
    // ทำการอัพเดทข้อมูล
    const updateResult = await this.districtRepository.update(
      id,
      updateDistrictDto,
    );
    // ตรวจสอบว่ามีการอัพเดทหรือไม่
    if (updateResult.affected === 0) {
      // ถ้าไม่มีการอัพเดท แสดงข้อผิดพลาด
      throw new InternalServerErrorException('Update failed');
    }
    // คืนค่าผลลัพธ์หลังจากอัพเดท
    return await this.districtRepository.findOne({ where: { id } });
  }

  remove(id: number) {
    return `This action removes a #${id} district`;
  }
}
