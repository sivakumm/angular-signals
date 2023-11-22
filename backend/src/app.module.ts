import { Module } from '@nestjs/common';
import { EmployeesController } from './employees/employees.controller';
import { EmployeeRepository } from './employees/repository/employee.repository';

@Module({
  imports: [],
  controllers: [EmployeesController],
  providers: [EmployeeRepository],
})
export class AppModule {}
