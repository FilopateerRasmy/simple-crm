import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Deal } from 'src/app/models/deal';

@Component({
  selector: 'app-deals-list',
  templateUrl: './deals-list.component.html',
  styleUrls: ['./deals-list.component.scss']
})
export class DealsListComponent implements OnChanges {
  @Input() deals:Deal[] = [];
  focusArray:Deal[] = [];
  potentialValue:Deal[] = [];
  contactMade:Deal[] = [];
  offerSent:Deal[] = [];
  gettingReady:Deal[] = [];

  @Output() deal= new EventEmitter<Deal>()
  ngOnChanges(changes: SimpleChanges): void {
    this.reset()
    this.filterByStatus()

  }

  filterByStatus(){
    this.deals.filter(deal => {
     if(deal.status === "Potential Value"){
      this.potentialValue.push(deal)
     }else if(deal.status === "Contact Made"){
      this.contactMade.push(deal)
     }else if(deal.status === "Focus"){
      this.focusArray.push(deal)
     }else if(deal.status === "Getting Ready"){
      this.gettingReady.push(deal)
     }else if(deal.status === "Offer Sent"){
      this.offerSent.push(deal)
     }
    })
  }

  reset(){
    this.focusArray = [];
    this.potentialValue = [];
    this.contactMade = [];
    this.gettingReady = [];
    this.offerSent = [];
  }

  trackBy(index:number, deal:Deal){
    return deal.id;
  }

  drop(event:CdkDragDrop<Deal[]>, status:string){

    if(event.previousContainer == event.container){

      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);

    }else{

      transferArrayItem(event.previousContainer.data,event.container.data, event.previousIndex, event.currentIndex);
      const updatedDeal:Deal =   event.container.data[event.currentIndex];
        updatedDeal.status = status
        this.deal.emit(updatedDeal)

    }

  }
}
