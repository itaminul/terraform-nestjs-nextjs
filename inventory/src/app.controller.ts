import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('inventory')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getInventoryService();
  }
  @Get('list')
  getList(): string {
    return this.appService.getList();
  }
  @Get('create')
  getCreate(): string {
    return this.appService.getCreate();
  }
  @Get('view')
  getView(): string {
    return this.appService.getView();
  }
}
