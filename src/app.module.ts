import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { PrismaService } from './services/prisma/prisma.service';
import { CityService } from './services/city/city.service';
import { VendorsModule } from './vendors/vendors.module';
import { UploaderModule } from './uploader/uploader.module';

@Module({
  imports: [ProductsModule, VendorsModule, UploaderModule],
  controllers: [AppController],
  providers: [AppService, PrismaService, CityService],
})
export class AppModule {}
