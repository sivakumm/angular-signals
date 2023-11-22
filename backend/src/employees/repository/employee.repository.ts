import {Employee} from '../Employee';
import {Injectable} from '@nestjs/common';

@Injectable()
export class EmployeeRepository {
    employees: Employee[] = [
        {
            "id": "0fbf492d-820b-48a4-ab5a-fa3aae822434",
            "firstName": "Peter",
            "lastName": "Muster",
            "role": "Developer",
            "salary": 100000
        }
    ];

    save(employee: Employee): void {
        this.employees.push(employee);
    }

    update(employee: Employee): void {
        const dbEmployee: Employee | undefined = this.employees.find(
            (empl) => employee.id === empl.id,
        );
        if (dbEmployee !== undefined) {
            this.employees.filter((empl) => empl.id !== employee.id);
            this.employees.push({...dbEmployee, ...employee});
        }
    }

    findAll(): Employee[] {
        return [...this.employees];
    }

    findById(id: string): Employee | undefined {
        return this.employees.find((employee) => employee.id === id);
    }
}
