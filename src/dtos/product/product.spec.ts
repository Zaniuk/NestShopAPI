import { CreateProductDto, UpdateProductDto } from './product';

describe('Product', () => {
  it('should be defined', () => {
    expect(new CreateProductDto()).toBeDefined();
  });
});
describe('Product', () => {
  it('should be defined', () => {
    expect(new UpdateProductDto()).toBeDefined();
  });
});
