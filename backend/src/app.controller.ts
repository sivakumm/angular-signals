import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/api/employees')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getEmployees(): Record<string, any> {
    return {
      firstName: 'Peter',
      lastName: 'Muster',
      role: 'Developer',
      salary: 10000,
    };
  }
}
