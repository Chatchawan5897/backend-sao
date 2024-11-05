import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DistrictModule } from './district/district.module';
import { SubdistrictModule } from './subdistrict/subdistrict.module';
import { Province } from './province/entities/province.entity';
import { District } from './district/entities/district.entity';
import { Subdistrict } from './subdistrict/entities/subdistrict.entity';
import { ProvinceModule } from './province/province.module';
import { ApplicantModule } from './applicant/applicant.module';
import { Applicant } from './applicant/entities/applicant.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'nestdb',
    entities: [
        Province , District , Subdistrict , Applicant
    ],
    synchronize: true,
  }),
    ProvinceModule,
    DistrictModule,
    SubdistrictModule,
    ApplicantModule,
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
