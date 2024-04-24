import {  Injectable } from "@angular/core";
import { Recipee } from "./recipee.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Subject } from "rxjs";

@Injectable()
export class RecipeeService{
    
    selectedRecipee = new Subject<Recipee>();
    private recipees: Recipee[] = [
        new Recipee(
            'Birria',
            'Mexican Dish', 
            'https://www.isabeleats.com/wp-content/uploads/2023/06/birria-small-12.jpg',
            [
                new Ingredient('Dried Chilis', 2)
                ,
                new Ingredient(
                    'Spices & Aromatics', 4),
                new Ingredient('Beef', 3),
                
            ]
            
        ),
        new Recipee(
            'Toum', 
            'Lebanese Garlic Sauce', 
            'https://feelgoodfoodie.net/wp-content/uploads/2018/07/Garlic-Sauce-11.jpg',
            [
                new Ingredient('Garlic', 4),
                new Ingredient('Oil', 2),
                new Ingredient('Lemon juice', 1),
                new Ingredient('Salt', 2),
            ]
        )
      ];

    constructor(private slService: ShoppingListService){

    }
    getRecipees(){
        return this.recipees.slice();
    }
    
    setRecipees(){

    }

    addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slService.setIngredients(ingredients);
    }
    getRecipeeById(index: number): Recipee {
       
        const recipee = this.recipees[index];
        return recipee;
    }
}