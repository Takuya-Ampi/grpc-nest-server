import { Controller, Get } from '@nestjs/common';
// import { AppService } from './app.service';
import { GrpcMethod } from '@nestjs/microservices';

import { SampleData, SampleDataById } from './model';

@Controller()
export class AppController {
  // constructor(private readonly appService: AppService) {}

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }
  @GrpcMethod('AppService')
  findOne(data: SampleDataById, metadata: any): SampleData {
    const items = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Doe' },
    ] as SampleData[];
    const filteredItems = items.filter((item) => item.id === data.id);
    return filteredItems.length > 0 ? filteredItems[0] : ({} as SampleData);
  }
}
