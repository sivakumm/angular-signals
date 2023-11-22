import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  EventEmitter,
  Input,
  Output,
  Signal,
  signal
} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";
import {Validators} from "../validation/validators";

export type EmployeeEditorMode = 'CREATE' | 'UPDATE';

interface EmployeeFormState {
  firstName?: string;
  lastName?: string;
  role?: string;
  salary?: number;
}

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

  employeeForm: Signal<EmployeeFormState>;
  firstName = signal("");
  lastName = signal("");
  role = signal("");
  salary = signal(0);

  constructor() {
    this.fullName = computed(() => `${this.firstName()} ${this.lastName()}`);
    this.employeeForm = computed(() => ({
      firstName: this.firstName(),
      lastName: this.lastName(),
      role: this.role(),
      salary: this.salary()
    }));

    effect(() => {
      const form = this.employeeForm();

      const states = Validators.validate([
        Validators.minLength('firstName', form.firstName, 3),
        Validators.minLength('lastName', form.lastName, 3)
      ]);
      console.log('validated');
    });
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
