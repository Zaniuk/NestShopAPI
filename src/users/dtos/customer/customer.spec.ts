import { CreateCustomerDto, UpdateCustomerDto } from './customer';

describe('Customer', () => {
  it('should be defined', () => {
    expect(new CreateCustomerDto()).toBeDefined();
  });
});

describe('Customer', () => {
  it('should be defined', () => {
    expect(new UpdateCustomerDto()).toBeDefined();
  });
});
