import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // ใช้ ValidationPipe ทั่วทั้งแอป
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true, // แปลงค่าจาก string ให้เป็น type ที่ต้องการ (เช่น number)
      whitelist: true, // กำจัด properties ที่ไม่ได้ประกาศใน DTO ออก
      forbidNonWhitelisted: true, // ข้อผิดพลาดถ้ามี property ที่ไม่ได้ประกาศใน DTO
    }),
  );

  app.enableCors();
  await app.listen(process.env.PORT ?? 5000);
}
bootstrap();
