import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, shareReplay } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Deal } from '../models/deal';

@Injectable({
  providedIn: 'root'
})
export class DealsService {
  apiUrl = environment.apiUrl + 'contacts/db'
  constructor(private http:HttpClient) { }

  deals$ = this.http.get<{deals:Deal[]}>(this.apiUrl).pipe(
    map(res => res.deals),
    shareReplay({bufferSize:1, windowTime:3000, refCount:true})
  )
  updateDeal(deal:Deal){
    return this.http.patch(this.apiUrl, deal)
  }
}
