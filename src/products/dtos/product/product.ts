import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, IsUrl } from 'class-validator';
export class CreateProductDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly name: string;
  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  readonly price: number;
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly description: string;
  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  readonly stock: number;
  @ApiProperty()
  @IsUrl()
  @IsNotEmpty()
  readonly image: string;
}

export class UpdateProductDto extends PartialType(CreateProductDto) {}
