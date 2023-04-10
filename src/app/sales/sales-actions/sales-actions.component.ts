import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-sales-actions',
  templateUrl: './sales-actions.component.html',
  styleUrls: ['./sales-actions.component.scss']
})
export class SalesActionsComponent {
  segmentsArr:string[] = []
  assigneeArr:string[] = []
  statusArr:string[] = []

  segment = new FormControl('')
  status = new FormControl('')
  assignee = new FormControl('')
 @Output() searchWord = new EventEmitter<string>();

 onSearch(value:string){
  if(value.length >= 3) this.searchWord.emit(value);
  else if(!value) this.searchWord.emit('');


}

}
