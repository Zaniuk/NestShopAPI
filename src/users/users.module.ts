import { Module } from '@nestjs/common';
import { ProductsModule } from 'src/products/products.module';
import { CustomerController } from './controllers/customers/customers.controller';
import { UsersController } from './controllers/users/users.controller';
import { CustomersService } from './services/customers/customers.service';
import { UsersService } from './services/users/users.service';

@Module({
  imports: [ProductsModule],
  controllers: [UsersController, CustomerController],
  providers: [UsersService, CustomersService],
  exports: [UsersService, CustomersService],
})
export class UsersModule {}
