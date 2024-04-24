import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipee } from '../../recipee.model';
import { RecipeeService } from '../../recipee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipee-item',
  templateUrl: './recipee-item.component.html',
  styleUrls: ['./recipee-item.component.css']
})
export class RecipeeItemComponent {

  @Input() r: Recipee|undefined;
  @Input() id!: number;

  constructor(private recipeeService: RecipeeService, private router: Router, private currentRoute: ActivatedRoute){

  }
  //@Output() recipeeClickEvent = new EventEmitter();


    /* onRecipeeClick() {  
      //this.recipeeClickEvent.emit(); 
     /*  this.recipeeService.selectedRecipee.emit(this.r) */
      /* this.router.navigate(['recipee'], this.r.name) } */

      

}
