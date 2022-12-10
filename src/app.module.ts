import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BrandsController } from './controllers/brands/brands.controller';
import { UsersController } from './controllers/users/users.controller';
import { CategoriesController } from './controllers/categories/categories.controller';
import { CustomersController } from './controllers/customers/customers.controller';
import { ProductsController } from './controllers/products/products.controller';
import { UsersService } from './services/users/users.service';
import { ProductsService } from './services/products/products.service';
import { CustomersService } from './services/customers/customers.service';
import { CategoriesService } from './services/categories/categories.service';
import { BrandsService } from './services/brands/brands.service';

@Module({
  imports: [],
  controllers: [
    AppController,
    BrandsController,
    UsersController,
    CategoriesController,
    CustomersController,
    ProductsController,
  ],
  providers: [
    AppService,
    UsersService,
    ProductsService,
    CustomersService,
    CategoriesService,
    BrandsService,
  ],
})
export class AppModule {}
