
import { Ingredient } from "../shared/ingredient.model";
import { Subject } from "rxjs";

export class ShoppingListService{

    ingredientsChanged = new Subject<Ingredient[]>()

    startedEditing = new Subject<number>()
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 50),
        new Ingredient('Tomato', 5),
      ];
      
      addIngredient(value: Ingredient) {
        this.ingredients.push(value)
        this.ingredientsChanged.next(this.ingredients.slice())
      }

      getIngredients(){
        return this.ingredients.slice()
      }
      getIngredient(index: number){
        return this.ingredients[index];
      }

      setIngredients(ingredients: Ingredient[]){
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.next(this.ingredients.slice());

      }

      updateIngredients(index: number, newIngredient: Ingredient){
        this.ingredients[index] = newIngredient;
        this.ingredientsChanged.next(this.ingredients.slice());
      }

      deleteIngredients(index: number){
        this.ingredients.splice(index, 1);
        this.ingredientsChanged.next(this.ingredients.slice());
      }
}