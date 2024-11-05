import {
  Injectable,
  NotFoundException,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateApplicantDto } from './dto/create-applicant.dto';
import { UpdateApplicantDto } from './dto/update-applicant.dto';
import { createResponse } from '../../response.uils';
import { Applicant } from './entities/applicant.entity';

@Injectable()
export class ApplicantService {
  constructor(
    @InjectRepository(Applicant)
    private readonly applicantRepository: Repository<Applicant>,
  ) {}

  async create(createApplicantDto: CreateApplicantDto) {
    try {
      const applicant =
        await this.applicantRepository.create(createApplicantDto);
      // บันทึกลง database
      const toCreate = await this.applicantRepository.save(applicant);
      return createResponse(
        201,
        'applicant created successfully',
        toCreate,
        '/applicant',
        'POST',
      );
    } catch (error) {
      throw new Error('Error while saving applicant to database');
    }
  }

  // create(createApplicantDto: CreateApplicantDto) {
  //   return 'This action adds a new applicant';
  // }

  findAll() {
    return `This action returns all applicant`;
  }

  findOne(id: number) {
    return `This action returns a #${id} applicant`;
  }

  update(id: number, updateApplicantDto: UpdateApplicantDto) {
    return `This action updates a #${id} applicant`;
  }

  remove(id: number) {
    return `This action removes a #${id} applicant`;
  }
}
