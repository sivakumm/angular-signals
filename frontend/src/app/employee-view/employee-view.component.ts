import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { EmployeeEditorComponent } from "./employee-editor/employee-editor.component";
import { EmployeeListComponent } from "./employee-list/employee-list.component";

@Component({
  selector: "app-employee-view",
  standalone: true,
  imports: [CommonModule, EmployeeEditorComponent, EmployeeListComponent],
  templateUrl: "./employee-view.component.html",
  styleUrl: "./employee-view.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeViewComponent {

}