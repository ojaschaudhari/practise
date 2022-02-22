import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { UploaderService } from './uploader.service';
import {
  ArrayInObjects,
  filefiltermid,
  filenamemid,
} from './dto/create-uploader.dto';
import { UpdateUploaderDto } from './dto/update-uploader.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import xlsx from 'node-xlsx';

@Controller('uploader')
export class UploaderController {
  constructor(private readonly uploaderService: UploaderService) {}

  @Post('upload')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: '/home/ok/UPLOADS',
        filename: filenamemid,
      }),
      fileFilter: filefiltermid,
    }),
  )
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    const worksheet: any[] = xlsx.parse(file.path);

    const data = worksheet[0].data.slice(1);
    const newdata = new ArrayInObjects(data);

    return this.uploaderService.create(newdata);
  }

  // @Get()
  // findAll() {
  //   return this.uploaderService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.uploaderService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateUploaderDto: UpdateUploaderDto) {
  //   return this.uploaderService.update(+id, updateUploaderDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.uploaderService.remove(+id);
  // }
}
