import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalesComponent } from './sales.component';
import { CustomMenuBarComponent } from '../shared/custom-menu-bar/custom-menu-bar.component';
import { RouterModule, Routes } from '@angular/router';
import { DealsListComponent } from './deals-list/deals-list.component';
import { AngularMaterialComponentsModule } from '../shared/angular-material-components/angular-material-components.module';
import { SalesActionsComponent } from './sales-actions/sales-actions.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DealsShellComponent } from './deals-shell/deals-shell.component';
import { DealsCardComponent } from './deals-card/deals-card.component';

const routes:Routes = [
  {path:'' , component:SalesComponent,  children:[
    {path:'', redirectTo:'deals', pathMatch:'full'},
    {path:'deals', component:DealsShellComponent }
  ]}
]


@NgModule({
  declarations: [
    SalesComponent,
    DealsListComponent,
    SalesActionsComponent,
    DealsShellComponent,
    DealsCardComponent,

  ],
  imports: [
    CommonModule,
    CustomMenuBarComponent,
    AngularMaterialComponentsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class SalesModule { }
