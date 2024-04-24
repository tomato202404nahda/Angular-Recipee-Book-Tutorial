import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  constructor(private shoppingListService: ShoppingListService){

  }

  @ViewChild('nameInput')
  nameInputRef!: ElementRef;
  @ViewChild('amountInput')
  amountInputRef!: ElementRef;

  /* @Output() ingredientAdded = new EventEmitter<Ingredient>(); */

  Clear() {
    this.nameInputRef.nativeElement.value= '';
    this.amountInputRef.nativeElement.value= 0;
  }
  onDeleteItem() {
  throw new Error('Method not implemented.');
  }
  onAddItem() {
    const newIngredient = new Ingredient(
      this.nameInputRef.nativeElement.value, 
      this.amountInputRef.nativeElement.value);
      this.shoppingListService.addIngredient(newIngredient);
/*       this.ingredientAdded.emit(newIngredient); */
  }

}
