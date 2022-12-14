import { Controller } from '@nestjs/common';
import { Body, Delete, Get, Param, Post, Put } from '@nestjs/common/decorators';
import { ParseIntPipe } from '@nestjs/common/pipes';
import { ApiTags } from '@nestjs/swagger';
import {
  CreateCustomerDto,
  UpdateCustomerDto,
} from 'src/users/dtos/customer/customer';
import { CustomersService } from 'src/users/services/customers/customers.service';
@ApiTags('customers')
@Controller('customers')
export class CustomerController {
  constructor(private customersService: CustomersService) {}

  @Get()
  findAll() {
    return this.customersService.findAll();
  }

  @Get(':id')
  get(@Param('id', ParseIntPipe) id: number) {
    return this.customersService.findOne(id);
  }

  @Post()
  create(@Body() payload: CreateCustomerDto) {
    return this.customersService.create(payload);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateCustomerDto,
  ) {
    return this.customersService.update(id, payload);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.customersService.remove(+id);
  }
}
