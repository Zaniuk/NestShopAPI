import { Injectable } from '@nestjs/common';
import * as users from '../../mock/user/mock.data.json';
import { User } from './types/user.types';
@Injectable()
export class UsersService {
  private readonly users = users;
  idCounter = this.users.length;
  findAll() {
    return this.users;
  }
  findOne(id: number) {
    return this.users.find((user) => user.id === id);
  }
  create(user: User) {
    this.users.push(user);
  }
  update(id: number, user: User): User {
    const _user = this.users.find((user) => user.id === id);
    const index = this.users.indexOf(_user);
    user = { ...user, ..._user };
    this.users[index] = user;
    return user;
  }
}
