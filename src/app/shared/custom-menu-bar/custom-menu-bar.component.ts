import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import {  MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';


@Component({
  standalone: true,
  imports:[CommonModule, MatToolbarModule, RouterModule ],
  selector: 'app-custom-menu-bar',
  templateUrl: './custom-menu-bar.component.html',
  styleUrls: ['./custom-menu-bar.component.scss'],
})
export class CustomMenuBarComponent {
@Input() data:string[] = []

}
