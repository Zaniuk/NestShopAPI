import { Injectable, NotFoundException } from '@nestjs/common';
import {
  CreateProductDto,
  UpdateProductDto,
} from 'src/products/dtos/product/product';
import { Product } from 'src/products/entities/product.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ){}

  async findAll() {
    return await this.productRepository.find();
  }

  async findOne(id: number) {
    const product = await this.productRepository.findOne({where: {id}});
    if (!product) {
      throw new NotFoundException(`Product #${id} not found`);
    }
    return product;
  }
}
