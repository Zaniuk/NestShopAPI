import { Module } from '@nestjs/common';
import { BrandsController } from './controllers/brands/brands.controller';
import { CategoriesController } from './controllers/categories/categories.controller';
import { ProductsController } from './controllers/products/products.controller';
import { BrandsService } from './services/brands/brands.service';
import { CategoriesService } from './services/categories/categories.service';
import { ProductsService } from './services/products/products.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Category } from './entities/category.entity';
import { Brand } from './entities/brand.entity';
@Module({
  imports: [TypeOrmModule.forFeature([Product, Category, Brand])],
  controllers: [ProductsController, CategoriesController, BrandsController],
  providers: [CategoriesService, ProductsService, BrandsService],
  exports: [ProductsService],
})
export class ProductsModule {}
