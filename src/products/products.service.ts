import { Injectable } from '@nestjs/common';
import {
  Orgs,
  Prisma,
  Products,
  Product_details,
  Vendors,
} from '@prisma/client';
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
        org_id: 1,
        category_id: createProductDto.cid,
        sub_category_id: createProductDto.scid,
      },
    });
    return prod;
  }

  findAll(city: number, cid: number, scid: number): Promise<Products[]> {
    return this.prisma.products.findMany({
      where: {
        avail_city: city,
        category_id: cid,
      },
    });
  }

  // SQL JOINS
  findBycity(city: number) {
    return this.prisma.orgs.findMany({
      where: {
        city: city,
      },
      select: {
        Vendors: {
          select: {
            username: true,
          },
        },

        id: true,
        org_name: true,

        Products: {
          where: {
            avail_city: city,
          },

          select: {
            name: true,
            org_id: true,

            Product_details: {
              select: {
                id: true,
                p_img: true,
              },
            },
          },
        },
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
