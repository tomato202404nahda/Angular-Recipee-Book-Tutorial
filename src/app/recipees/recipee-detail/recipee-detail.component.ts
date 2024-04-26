import { Component, Input, OnInit } from '@angular/core';
import { Recipee } from '../recipee.model';
import { RecipeeService } from '../recipee.service';
import { ActivatedRoute, Data, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipee-detail',
  templateUrl: './recipee-detail.component.html',
  styleUrls: ['./recipee-detail.component.css']
})
export class RecipeeDetailComponent implements OnInit {
  recipee!: Recipee;
  id!: number;

  constructor(private recipeeService: RecipeeService, private currentRoute: ActivatedRoute, private router: Router){

  }
  ngOnInit(): void {
    this.currentRoute.params.subscribe(
      (params: Params)=>{
        this.id=Number(params['id'])-1
        this.recipee = this.recipeeService.getRecipeeById(this.id);
      }
    )
    console.log(this.recipee);
  }

  onAddToShoppingList() {
    this.recipeeService.addIngredientsToShoppingList(this.recipee!.ingredients);
    }
    onDeleteRecipee(id: number){
      this.recipeeService.removeRecipee(id);
      this.router.navigate(['../'])
    }
}
