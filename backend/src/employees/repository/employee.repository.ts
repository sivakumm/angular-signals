import { Employee } from '../Employee';
import { Injectable } from '@nestjs/common';

@Injectable()
export class EmployeeRepository {
  employees: Employee[] = [
    {
      id: '5787b3bd-04e1-45cd-9d5d-8be1bf7dcad0',
      firstName: 'Veronique',
      lastName: 'Gronaver',
      role: 'Project Manager',
      salary: 82208,
    },
    {
      id: '462145e6-1862-422f-9eaa-381792f345e5',
      firstName: 'Silva',
      lastName: 'Rodell',
      role: 'Surveyor',
      salary: 93040,
    },
    {
      id: 'e35717a7-de4a-4a43-86d6-e915be667363',
      firstName: 'Jody',
      lastName: 'Riccardi',
      role: 'Construction Expeditor',
      salary: 138292,
    },
    {
      id: 'bbd7d160-d1c7-4eb9-a3bf-06e6361d5540',
      firstName: 'Eileen',
      lastName: 'Vink',
      role: 'Construction Foreman',
      salary: 104879,
    },
    {
      id: '7e3373f6-5504-4f9c-b3a8-c7f002e3158b',
      firstName: 'Brigitte',
      lastName: 'Rosenberg',
      role: 'Construction Worker',
      salary: 136940,
    },
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
      this.employees.push({ ...dbEmployee, ...employee });
    }
  }

  findAll(): Employee[] {
    return [...this.employees];
  }

  findById(id: string): Employee | undefined {
    return this.employees.find((employee) => employee.id === id);
  }
}
