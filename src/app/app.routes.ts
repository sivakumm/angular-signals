import { Routes } from '@angular/router';

export const routes: Routes = [
  {path: '', pathMatch: 'full', loadComponent: () => import('./update-price/update-price.component').then(m => m.UpdatePriceComponent)}
];
