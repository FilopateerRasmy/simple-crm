import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'sales', loadChildren: ()=> import('./sales/sales.module').then(m => m.SalesModule)},
  {path:'', redirectTo:'sales', pathMatch:'full'},
  {path:'**', redirectTo:'sales', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
