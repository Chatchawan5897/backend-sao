import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
} from '@nestjs/common';
import { DistrictService } from './district.service';
import { CreateDistrictDto } from './dto/create-district.dto';
import { UpdateDistrictDto } from './dto/update-district.dto';
import { createResponse } from '../../response.uils';

@Controller('district')
export class DistrictController {
  constructor(private readonly districtService: DistrictService) {}

  @Post()
  @HttpCode(201)
  async create(@Body() createDistrictDto: CreateDistrictDto) {
    return await this.districtService.create(createDistrictDto);
  }

  @Get()
  @HttpCode(200)
  async findAll() {
    return await this.districtService.findAll();
  }

  @Get(':id')
  @HttpCode(200)
  async findOne(@Param('id') id: number) {
    return this.districtService.findOne(+id);
  }


  @Patch(':id')
  @HttpCode(200)
  async update(@Param('id') id:number , @Body() updateDistrictDto : UpdateDistrictDto) {
    return await this.districtService.update(+id , updateDistrictDto);
  }


  // update(
  //   @Param('id') id: string,
  //   @Body() updateDistrictDto: UpdateDistrictDto,
  // ) {
  //   return this.districtService.update(+id, updateDistrictDto);
  // }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.districtService.remove(+id);
  }
}
