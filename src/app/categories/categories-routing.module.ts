import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { CategoriesComponent } from './categories/categories.component';

const routes: Routes = [
  {
    path: '',
    component: CategoriesComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }
