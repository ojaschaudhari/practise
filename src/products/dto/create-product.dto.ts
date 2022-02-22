import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateProductDto {
    @IsNotEmpty()
    name:string;

    @IsNotEmpty()
    city:number;

    @IsNotEmpty()
    @IsNumber()
    cid:number;

    @IsNotEmpty()
    @IsNumber()
    scid:number;
}