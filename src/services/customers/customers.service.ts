import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from 'src/dtos/customer/customer';
import * as customers from '../../mock/customer/mock.data.json';
import { Customer } from './types/customers.types';
@Injectable()
export class CustomersService {
  private readonly customers: Customer[] = customers;
  findAll() {
    return this.customers;
  }
  findOne(id: number) {
    return this.customers.find((customer) => customer.id === id);
  }
  delete(id: number) {
    const index = this.customers.findIndex((customer) => customer.id === id);
    this.customers.splice(index, 1);
  }
  create(customer: CreateCustomerDto): Customer {
    const newCustomer = {
      id: this.customers.length + 1,
      ...customer,
    };
    this.customers.push(newCustomer);
    return newCustomer;
  }
  update(id: number, customer: CreateCustomerDto): Customer {
    const index = this.customers.findIndex((customer) => customer.id === id);
    this.customers[index] = {
      id,
      ...customer,
    };
    return this.customers[index];
  }
}
