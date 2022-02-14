import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  create(createProductDto: CreateProductDto) {
    const prod = this.prisma.products.create({
      data: {
        name: createProductDto.name,
        avail_city: createProductDto.city,
        org_id: 0,
        category_id: createProductDto.cid,
        sub_category_id: createProductDto.scid,
      },
    });
    return 'This action adds a new product';
  }

  findAll(city: string, cid: number, scid: number) {
    return this.prisma.products.findMany({
      where: {
        avail_city: city,
        category_id: cid,
        sub_category_id: scid,
      },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    console.log('update');
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
