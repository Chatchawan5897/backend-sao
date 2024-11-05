import {
  Injectable,
  NotFoundException,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSubdistrictDto } from './dto/create-subdistrict.dto';
import { UpdateSubdistrictDto } from './dto/update-subdistrict.dto';
import { Subdistrict } from './entities/subdistrict.entity';
import { createResponse } from '../../response.uils';

@Injectable()
export class SubdistrictService {
  constructor(
    @InjectRepository(Subdistrict)
    private readonly subdistrictRepository: Repository<Subdistrict>,
  ) {}

  async create(createProvinceDto: CreateSubdistrictDto) {
    try {
      // สร้าง instance ของ Province entity จากข้อมูลที่รับมาจาก DTO
      const subdistrict =
        await this.subdistrictRepository.create(createProvinceDto);
      // บันทึกข้อมูลจังหวัดลงในฐานข้อมูล
      const toCreate = await this.subdistrictRepository.save(subdistrict);

      return createResponse(
        201,
        'subdistrict created successfully',
        toCreate,
        '/subdistrict',
        'POST',
      );
    } catch (error) {
      throw new Error('Error while saving subdistrict to database');
    }
  }

  // create(createSubdistrictDto: CreateSubdistrictDto) {
  //   return 'This action adds a new subdistrict';
  // }

  findAll() {
    return `This action returns all subdistrict`;
  }

  findOne(id: number) {
    return `This action returns a #${id} subdistrict`;
  }

  update(id: number, updateSubdistrictDto: UpdateSubdistrictDto) {
    return `This action updates a #${id} subdistrict`;
  }

  remove(id: number) {
    return `This action removes a #${id} subdistrict`;
  }
}
