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

  @Output()
  save = new EventEmitter<Employee>();
  mode = signal<EmployeeEditorMode>('CREATE')
  fullName: Signal<String>;
  firstName = signal("");
  lastName = signal("");
  role = signal("");
  salary = signal(0);

  constructor() {

    this.fullName = computed(() => `${this.firstName()} ${this.lastName()}`);
  }

  @Input()
  set employee(employee: Employee | null) {
    this.mode.set(!employee ? 'CREATE' : 'UPDATE')

    this.firstName.set(employee?.firstName ?? '');
    this.lastName.set(employee?.lastName ?? '');
    this.role.set(employee?.role ?? '');
    this.salary.set(employee?.salary ?? 0);
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
