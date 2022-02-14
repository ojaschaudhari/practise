import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CityService {
  constructor(private readonly prisma: PrismaService) {}

  async findCities(): Promise<any[]> {
    let data: any[] = [];
    await this.prisma.products
      .findMany({
        distinct: ['avail_city'],
        orderBy: {
          avail_city: 'asc',
        },
        select: {
          id: true,
          avail_city: true,
        },
      })
      .then((res) => {
        console.log('cities-', res);
        data.push(res);
      })
      .catch((err) => {
        console.log('err-', err);
      });

    await this.prisma.categories
      .findMany({
        distinct: ['id'],
        orderBy: {
          category_name: 'asc',
        },
        select: {
          id: true,
          category_name: true,
        },
      })
      .then((res) => {
        console.log('cities-', res);
        data.push(res);
      })
      .catch((err) => {
        console.log('err-', err);
      });

    await this.prisma.sub_Categories
      .findMany({
        distinct: ['id'],
        orderBy: {
          sub_category_name: 'asc',
        },
        select: {
          id: true,
          sub_category_name: true,
        },
      })
      .then((res) => {
        console.log('cities-', res);
        data.push(res);
      })
      .catch((err) => {
        console.log('err-', err);
      });

    return data;
  }
}
