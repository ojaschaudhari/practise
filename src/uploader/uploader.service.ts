import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma/prisma.service';
import { CreateUploaderDto } from './dto/create-uploader.dto';
import { UpdateUploaderDto } from './dto/update-uploader.dto';

@Injectable()
export class UploaderService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: any) {
    console.log('data-', data.length);

    // return data;
    const records = await this.prisma.products
      .createMany({ data: data })
      .then((res) => {
        return res.count;
      })
      .catch((err) => {
        return new HttpException(
          'Records are not uploaded',
          HttpStatus.PRECONDITION_FAILED,
        );
      });
    return `${records} records uploaded successfully!!!`;
  }

  // findAll() {
  //   return `This action returns all uploader`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} uploader`;
  // }

  // update(id: number, updateUploaderDto: UpdateUploaderDto) {
  //   return `This action updates a #${id} uploader`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} uploader`;
  // }
}
