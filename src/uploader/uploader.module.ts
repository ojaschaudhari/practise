import { Module } from '@nestjs/common';
import { UploaderService } from './uploader.service';
import { UploaderController } from './uploader.controller';
import { PrismaService } from 'src/services/prisma/prisma.service';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [
    MulterModule.register({
      dest: '/home/ok/UPLOADS',
    }),
  ],
  controllers: [UploaderController],
  providers: [UploaderService, PrismaService],
})
export class UploaderModule {}
