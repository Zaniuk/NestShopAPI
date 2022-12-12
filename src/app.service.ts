import { Injectable } from '@nestjs/common';
import { Inject } from '@nestjs/common/decorators';
import { ConfigType } from '@nestjs/config';
import config from '../config';

@Injectable()
export class AppService {
  constructor(
    @Inject(config.KEY) private configService: ConfigType<typeof config>,
  ) {}
  getHello(): string {
    return 'Hello World!';
  }
}
