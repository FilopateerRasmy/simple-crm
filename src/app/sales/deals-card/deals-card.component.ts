import { Component, Input } from '@angular/core';
import { Deal } from 'src/app/models/deal';

@Component({
  selector: 'app-deals-card',
  templateUrl: './deals-card.component.html',
  styleUrls: ['./deals-card.component.scss']
})
export class DealsCardComponent {
@Input() deal:Deal | null = null
}
