import {Injectable, signal, Signal} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EmployeeDataService {

  private http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  public loadEmployees$(): Observable<Employee[]> {
    return this.http.get<Array<Employee>>('/api/employees');
  }

  public loadEmployees(): Signal<Employee[]> {
    const employeeSignal = signal<Employee[]>([]);
    this.loadEmployees$().subscribe(employees => {
      employeeSignal.set(employees);
    });
    return employeeSignal.asReadonly();
  }

}
