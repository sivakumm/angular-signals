import { ChangeDetectionStrategy, Component, inject, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { EmployeeEditorComponent } from "./employee-editor/employee-editor.component";
import { EmployeeListComponent } from "./employee-list/employee-list.component";
import { EmployeeDataService } from "./employee-data-service/employee-data.service";
import { Observable, of } from "rxjs";
import { ModalService } from "../modal/modal.service";

@Component({
  selector: "app-employee-view",
  standalone: true,
  imports: [CommonModule, EmployeeEditorComponent, EmployeeListComponent],
  templateUrl: "./employee-view.component.html",
  styleUrl: "./employee-view.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeViewComponent implements OnInit {

  employees$: Observable<Employee[]> = of([]);
  selectedEmployee: Employee | null = null;
  private employeeDataService = inject(EmployeeDataService);
  private modalService = inject(ModalService);

  ngOnInit(): void {
    this.employees$ = this.employeeDataService.loadEmployees$();
  }

  saveEmployee(newEmployee: Employee) {
    console.log("save employee");
  }

  showEmployeeSalary(employee: Employee): void {
    const { firstName, lastName, salary } = employee;
    const formattedSalary = new Intl.NumberFormat(
      "de-CH",
      { style: "currency", currency: "CHF" })
      .format(salary);
    this.modalService.setTitle("Salary View");
    this.modalService.setContent(`Salary of ${firstName} ${lastName} is ${formattedSalary}.`);
    this.modalService.open();
  }
}
