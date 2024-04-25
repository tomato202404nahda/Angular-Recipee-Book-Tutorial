import { Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  subscription!: Subscription;

  editMode = false;
  itemEdited!: number;


  constructor(private shoppingListService: ShoppingListService){

  }

  ngOnInit(): void {
    this.subscription =  this.shoppingListService.startedEditing.subscribe(
      (index)=>{
        this.itemEdited = index;
        this.editMode = true;
      }
    )
  }
  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }

  /* @Output() ingredientAdded = new EventEmitter<Ingredient>(); */

  
  onDeleteItem() {
  throw new Error('Method not implemented.');
  }
  onAddItem(form: NgForm) {
    const value = form.value
    /* const newIngredient = new Ingredient(
      this.nameInputRef.nativeElement.value, 
      this.amountInputRef.nativeElement.value); */
    const newIngredient = new Ingredient(value.name, value.amount);
      this.shoppingListService.addIngredient(newIngredient);
/*       this.ingredientAdded.emit(newIngredient); */
  }

}
