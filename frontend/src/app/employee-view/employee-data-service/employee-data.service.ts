import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {lastValueFrom, Observable} from "rxjs";

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

  public async loadEmployees(): Promise<Employee[]> {
    const employees$ = this.loadEmployees$();
    return await lastValueFrom(employees$);
  }
}
