import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateProductDto {
    @IsNotEmpty()
    name:string;

    @IsNotEmpty()
    city:string;

    @IsNotEmpty()
    @IsNumber()
    cid:number;

    @IsNotEmpty()
    @IsNumber()
    scid:number;
}