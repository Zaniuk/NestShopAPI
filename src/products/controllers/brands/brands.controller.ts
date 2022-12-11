import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import {
  CreateBrandDto,
  UpdateBrandDto,
} from 'src/products/dtos/brand/brand.dto';
@ApiTags('brands')
@Controller('brands')
export class BrandsController {
  @Get()
  findAll(): string {
    return 'This action returns all brands';
  }
  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `This action returns a #${id} brand`;
  }
  @Get(':id/products')
  findProducts(@Param('id') id: string): string {
    return `This action returns all products from brand #${id}`;
  }
  @Post()
  create(@Body() brand: CreateBrandDto): any {
    return brand;
  }
  @Put(':id')
  update(@Param('id') id: string, @Body() brand: UpdateBrandDto): any {
    return brand;
  }
}
