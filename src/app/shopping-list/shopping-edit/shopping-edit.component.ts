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

  @ViewChild('f') shoppingListForm!: NgForm;

  editMode = false;
  itemEditedIndex!: number;
  editedItem!: Ingredient;


  constructor(private shoppingListService: ShoppingListService){

  }

  ngOnInit(): void {
    this.subscription =  this.shoppingListService.startedEditing.subscribe(
      (index)=>{
        this.itemEditedIndex = index;
        this.editMode = true;
        this.editedItem = this.shoppingListService.getIngredient(index);
        this.shoppingListForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount,
        })
      }
    )
  }
  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }

  /* @Output() ingredientAdded = new EventEmitter<Ingredient>(); */

  onClear(){
    this.shoppingListForm.reset();
    this.editMode=false;
  }

  onDeleteItem(index: number) {
    this.onClear();
    this.shoppingListService.deleteIngredients(index);
  }
  onAddItem(form: NgForm) {
    const value = form.value
    /* const newIngredient = new Ingredient(
      this.nameInputRef.nativeElement.value, 
      this.amountInputRef.nativeElement.value); */
      const newIngredient = new Ingredient(value.name, value.amount);
    if(this.editMode){
      /* const value = form.value
      this.shoppingListService.getIngredient(this.itemEditedIndex).name=value.name;
      this.shoppingListService.getIngredient(this.itemEditedIndex).amount=value.amount; */
      this.shoppingListService.updateIngredients(this.itemEditedIndex, newIngredient)
    }
    else {
      
      this.shoppingListService.addIngredient(newIngredient);
      /*       this.ingredientAdded.emit(newIngredient); */
    }
    this.editMode=false;
    this.shoppingListForm.reset()
  }
  
  

}
