import {ChangeDetectionStrategy, Component, computed, EventEmitter, Input, Output, Signal, signal} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";

export type EmployeeEditorMode = 'CREATE' | 'UPDATE';

@Component({
  selector: 'app-employee-editor',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './employee-editor.component.html',
  styleUrl: './employee-editor.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeEditorComponent {

  @Input()
  employee: Signal<Employee | null> = signal(null);

  @Output()
  save = new EventEmitter<Employee>();

  mode: Signal<EmployeeEditorMode>;
  fullName: Signal<String>;

  firstName = signal("");
  lastName = signal("");
  role = signal("");
  salary = signal(0);


  constructor() {
    this.mode = computed(() => !this.employee() ? 'CREATE' : 'UPDATE');
    this.fullName = computed(() => `${this.firstName()} ${this.lastName()}`);
  }

  saveForm() {
    const newEmployee: Employee = {
      firstName: this.firstName(),
      lastName: this.lastName(),
      role: this.role(),
      salary: this.salary()
    }
    this.save.emit(newEmployee);
  }
}
