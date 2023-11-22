import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: "employees",
    loadComponent: () => import("./employee-view/employee-view.component").then(m => m.EmployeeViewComponent)
  }
];
