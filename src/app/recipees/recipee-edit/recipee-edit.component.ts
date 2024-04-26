import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipee } from '../recipee.model';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { RecipeeService } from '../recipee.service';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-recipee-edit',
  templateUrl: './recipee-edit.component.html',
  styleUrls: ['./recipee-edit.component.css']
})
export class RecipeeEditComponent implements OnInit {
  id!:number;
  editMode = false;
  recipeeForm!: FormGroup;

  constructor(private currentRoute: ActivatedRoute, private recipeeService: RecipeeService, private router: Router){
      
  }
  ngOnInit(): void {
    this.currentRoute.params
      .subscribe(
        (params: Params) => {
          this.id = Number(params['id'])-1
          this.editMode = params['id'] != null;
          console.log(this.editMode)
          this.initForm();
        }
      )
  
  }

  private initForm(){

    let recipeeName = '';
    let imgPath = '';
    let description = '';
    let recipeeIngredients = new FormArray([]);
    

    if(this.editMode){
      const recipee: Recipee = this.recipeeService.getRecipeeById(this.id);
      recipeeName = recipee.name;
      imgPath = recipee.imagePath;
      description = recipee.description;
      if(recipee['ingredients']){
        for(let ingredient of recipee.ingredients){
          recipeeIngredients.push(
            new FormGroup({
              'name': new FormControl(ingredient.name, Validators.required),
            'amount': new FormControl(ingredient.amount, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
            })
          )
        }
        
      }
    }
    

    this.recipeeForm = new FormGroup({
      'recipeeName': new FormControl(recipeeName, Validators.required),
      'imagePath': new FormControl(imgPath, Validators.required),
      'description': new FormControl(description, Validators.required),
      'ingredients': recipeeIngredients
    })
  }

  getRecipeeIngredients(){
    return this.recipeeForm.get('ingredients') as FormArray
  }

  onSubmit(){
    const newRecipee = new Recipee(
      this.recipeeForm.value['recipeeName'],
      this.recipeeForm.value['description'],
      this.recipeeForm.value['imagePath'],
      this.recipeeForm.value['ingredients']
    )
    if(this.editMode){
      this.recipeeService.updateRecipee(this.id, newRecipee);
      this.router.navigate(['../'], {relativeTo: this.currentRoute})
    }else{
      this.recipeeService.addRecipee(newRecipee);
      this.router.navigate(['../'])
    }
  }
  

  onAddIngredient(){
    const ingredientGroup = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'amount': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
    });

    (<FormArray>this.recipeeForm.get('ingredients')).push(
      ingredientGroup
    )
  }
  onDeleteIngredient(index: number){
    (<FormArray>this.recipeeForm.get('ingredients')).removeAt(index);
  }
  onCancel(){
    this.router.navigate(['../'], {relativeTo: this.currentRoute})
  }
}
