import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-employee-list-item",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./employee-list-item.component.html",
  styleUrl: "./employee-list-item.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeListItemComponent {
  @Input()
  employee: Employee | undefined;

  @Output()
  showEmployeeSalary = new EventEmitter<Employee>();

  showSalary(event: MouseEvent): void {
    event.stopPropagation();
    this.showEmployeeSalary.emit(this.employee);
  }
}
