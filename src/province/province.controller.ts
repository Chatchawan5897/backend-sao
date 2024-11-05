import { Controller, Get, Post, Body, Patch, Param, Delete , HttpCode } from '@nestjs/common';
import { ProvinceService } from './province.service';
import { CreateProvinceDto } from './dto/create-province.dto';
import { UpdateProvinceDto } from './dto/update-province.dto';
import { createResponse } from '../../response.uils';


@Controller('province')// ใช้ path /provinces สำหรับการจัดการข้อมูลจังหวัด
export class ProvinceController {
  constructor(private readonly provinceService: ProvinceService) {}

  @Post()
  @HttpCode(201)
  async create(@Body() createProvinceDto : CreateProvinceDto){
    // ส่งคำขอไปยัง servince เพื่อสร้างจังวหัด
    return this.provinceService.create(createProvinceDto);
  }

  @Get()// รับคำขอ GET ที่ path /provinces
  @HttpCode(200)
  async findAll() {
    return this.provinceService.findAll(); // เรียกใช้ findAll จาก ProvinceService
  }

  @Get(':id')
  async findOne(@Param('id') id:number){
    return this.provinceService.findOne(id);
  }
 

  @Patch(':id')
  async update(@Param('id') id: string ,@Body() UpdateProvinceDto:UpdateProvinceDto){
    return this.provinceService.update(+id, UpdateProvinceDto);
  }


  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.provinceService.remove(+id);
  }
}
