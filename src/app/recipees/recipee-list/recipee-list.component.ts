import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Recipee } from '../recipee.model';
import { RecipeeService } from '../recipee.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipee-list',
  templateUrl: './recipee-list.component.html',
  styleUrls: ['./recipee-list.component.css']
})
export class RecipeeListComponent implements OnInit, OnDestroy {
  recipeeSubscriber: Subscription;
  recipees: Recipee[] = []
  constructor(private recipeeService: RecipeeService){
     
  }
  ngOnInit() {
      this.recipees = this.recipeeService.getRecipees();
      this.recipeeSubscriber=this.recipeeService.recipeesChanged.subscribe(
        (recipees) => {
          this.recipees=recipees
        }
      )
  }

  ngOnDestroy(): void {
      this.recipeeSubscriber.unsubscribe();
  }
  //@Output() recipeeSelected = new EventEmitter<Recipee>();


  /* selectedRecipee(obj: Recipee) {
  
    this.recipeeSelected.emit(obj)
  } */
}
