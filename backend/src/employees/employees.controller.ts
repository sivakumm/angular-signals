import {Body, Controller, Get, HttpCode, HttpStatus, Post, Put,} from '@nestjs/common';
import {Employee} from './Employee';
import {EmployeeRepository} from './repository/employee.repository';
import {randomUUID} from 'crypto';

@Controller('api/employees')
export class EmployeesController {
    constructor(private employeeRepository: EmployeeRepository) {
    }

    @Get()
    getAllEmployees(): Employee[] {
        return this.employeeRepository.findAll();
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    createEmployee(@Body() employee: Employee): void {
        this.employeeRepository.save({...employee, id: randomUUID()});
    }

    @Put()
    @HttpCode(HttpStatus.OK)
    updateEmployee(@Body() employee: Employee): void {
        this.employeeRepository.update({...employee});
    }
}
