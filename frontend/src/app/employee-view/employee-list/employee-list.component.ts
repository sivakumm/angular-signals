import {ChangeDetectionStrategy, Component, Input} from "@angular/core";
import {CommonModule} from "@angular/common";
import {EmployeeListItemComponent} from "../employee-list-item/employee-list-item.component";

@Component({
  selector: "app-employee-list",
  standalone: true,
  imports: [CommonModule, EmployeeListItemComponent],
  templateUrl: "./employee-list.component.html",
  styleUrl: "./employee-list.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeListComponent {
  @Input()
  employees: Employee[] | undefined | null;
}
