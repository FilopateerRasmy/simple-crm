import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialComponentsModule } from 'src/app/shared/angular-material-components/angular-material-components.module';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [CommonModule, AngularMaterialComponentsModule, RouterModule, ],
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SideComponent {
  data = [
    {title:'exhibitors', icon:'store'},
    {title:'sales', icon:'storefront'},
    {title:'program', icon:'calendar_today'},
    {title:'delegates', icon:'contact_page'},
    {title:'settings', icon:'settings'},
  ]


}

