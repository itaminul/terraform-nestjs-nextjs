import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getInventoryService(): string {
    return 'Welcome to inventory service!';
  }
  getList(): string {
    return 'Welcome to inventory list!';
  }
  getCreate(): string {
    return 'Welcome to inventory create!';
  }
  getView(): string {
    return 'Welcome to inventory view!';
  }
}
