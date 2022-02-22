import { HttpException, HttpStatus } from '@nestjs/common';
import { IsNotEmpty, IsNumber } from 'class-validator';
import { extname } from 'path';

export class CreateUploaderDto {
  @IsNotEmpty()
  name: string = '';

  @IsNotEmpty()
  avail_city: number = 0;

  @IsNotEmpty()
  @IsNumber()
  org_id: number = 0;

  @IsNotEmpty()
  @IsNumber()
  category_id: number = 0;

  @IsNotEmpty()
  @IsNumber()
  sub_category_id: number = 0;
}

export class ArrayInObjects {
  constructor(data: any) {
    let newarr: any[] = [];
    console.log(data);

    let obj: any = new CreateUploaderDto();

    for (let i in data) {
      let temp: CreateUploaderDto = Object.assign({}, obj);

      for (let j in obj) {
        for (let k = 0; k < 1; k++) {
          temp[j] = data[i][k];
          data[i].splice(0, 1);
        }
      }
      newarr.push(temp);
      console.log(newarr);
    }
    return newarr;
  }
}

export const filenamemid = (req, file, cb) => {
  const fname = file.originalname.split('.')[0];
  const fextname = extname(file.originalname);
  const d = Date.now();

  const filename = fname + d + fextname;
  cb(null, filename);
};

export const filefiltermid = (req, file, cb) => {
  if (file.originalname.match(/.(xlsx|xls)$/)) {
    return cb(null, true);
  }
  return cb(
    new HttpException(
      'File type is not supported',
      HttpStatus.UNSUPPORTED_MEDIA_TYPE,
    ),
    false,
  );
};
