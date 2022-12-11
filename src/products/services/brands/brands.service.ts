import { Injectable } from '@nestjs/common';
import { Brand } from 'src/entities/brand.entity';
import * as brands from '../../mock/brand/mock.data.json';
@Injectable()
export class BrandsService {
  private brands: Brand[] = brands;
  findAll() {
    return this.brands;
  }
  findOne(id: number) {
    return this.brands.find((brand) => brand.id === id);
  }
  delete(id: number) {
    const index = this.brands.findIndex((brand) => brand.id === id);
    this.brands.splice(index, 1);
  }
  update(id: number, brand: Brand): Brand {
    const index = this.brands.findIndex((brand) => brand.id === id);
    this.brands[index] = {
      id,
      ...brand,
    };
    return this.brands[index];
  }
}
