import { Component } from '@angular/core';
import { BehaviorSubject, combineLatest, map } from 'rxjs';
import { Deal } from 'src/app/models/deal';
import { DealsService } from 'src/app/services/deals.service';

@Component({
  selector: 'app-deals-shell',
  templateUrl: './deals-shell.component.html',
  styleUrls: ['./deals-shell.component.scss']
})
export class DealsShellComponent {
  deals$ = this.dealsService.deals$;
  searchWord = new BehaviorSubject<string>('');

  dealsChanges= combineLatest([this.deals$, this.searchWord]).pipe(
    map(([deals,search]) => {
      if(search){
        return deals.filter(deal => deal.first_name.toLowerCase() === search.toLowerCase() || deal.last_name.toLowerCase() === search.toLowerCase() || deal.email === search)
      }
      return deals;
    })
  )


  constructor(private dealsService:DealsService){}

  search(value:string){
    this.searchWord.next(value);
  }
  updateDeal(deal:Deal){
    this.dealsService.updateDeal(deal).subscribe()
  }
}
