import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-editor',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-editor.component.html',
  styleUrl: './employee-editor.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeEditorComponent {

}
