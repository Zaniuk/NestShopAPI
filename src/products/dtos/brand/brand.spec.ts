import { CreateBrandDto } from './brand.dto';

describe('Brand', () => {
  it('should be defined', () => {
    expect(new CreateBrandDto()).toBeDefined();
  });
});
