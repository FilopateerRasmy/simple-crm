import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialComponentsModule } from 'src/app/shared/angular-material-components/angular-material-components.module';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, AngularMaterialComponentsModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  contents = [
    {title:'DEALS', value:'43', color:'#E62565'},
    {title:'total value [nok]', value:'4.19 mln', color:'#7955BC'},
    {title:'hit rate', value:'10%', color:'#2A91E4'},
    {title:'deals won', value:'12/65', color:'#4DA852'},
    {title:'new clients', value:'8/12', color:'#FC5B33'},
  ]
}
