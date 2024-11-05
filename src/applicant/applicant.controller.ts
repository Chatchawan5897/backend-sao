import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode } from '@nestjs/common';
import { ApplicantService } from './applicant.service';
import { CreateApplicantDto } from './dto/create-applicant.dto';
import { UpdateApplicantDto } from './dto/update-applicant.dto';
import { ValidationPipe } from '@nestjs/common';

@Controller('applicant')
export class ApplicantController {
  constructor(private readonly applicantService: ApplicantService) {}

  @Post()
  @HttpCode(201)
  async create(@Body(new ValidationPipe()) createApplicantDto: CreateApplicantDto) {
      // ถ้าผ่านการตรวจสอบ validation จะไปทำงานที่นี่
    return this.applicantService.create(createApplicantDto); // ส่งค่ากลับไป
  }

  @Get()
  findAll() {
    return this.applicantService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.applicantService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateApplicantDto: UpdateApplicantDto) {
    return this.applicantService.update(+id, updateApplicantDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.applicantService.remove(+id);
  }
}
