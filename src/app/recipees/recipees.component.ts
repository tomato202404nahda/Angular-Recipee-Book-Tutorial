import { Component, OnDestroy, OnInit } from '@angular/core';
import { Recipee } from './recipee.model';
import { RecipeeService } from './recipee.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipees',
  templateUrl: './recipees.component.html',
  styleUrls: ['./recipees.component.css'],
  providers: [
    RecipeeService
  ]
})
export class RecipeesComponent implements OnInit, OnDestroy {
  private recipeeSubscription!: Subscription;
  constructor(private recipeeService: RecipeeService){
    
  }
  selectedRecipee: Recipee|undefined;
selectDetail(event: Recipee) {
  this.selectedRecipee = event;
}
  ngOnInit(): void {
    this.recipeeSubscription= this.recipeeService.selectedRecipee.subscribe(
      (recipee: Recipee) => {
        this.selectedRecipee = recipee;
      }
    )
  }

  ngOnDestroy(){
    this.recipeeSubscription.unsubscribe();
  }

}
