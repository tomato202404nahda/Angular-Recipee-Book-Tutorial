import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Recipee } from '../recipee.model';

@Component({
  selector: 'app-recipee-edit',
  templateUrl: './recipee-edit.component.html',
  styleUrls: ['./recipee-edit.component.css']
})
export class RecipeeEditComponent implements OnInit {
  id?:number;
  recipee?: Recipee;
  editMode = false;
  
  constructor(private currentRoute: ActivatedRoute){
      
  }
  ngOnInit(): void {
    this.currentRoute.params
      .subscribe(
        (params: Params) => {
          this.id = Number(params['id'])-1
          this.editMode = params['id'] != null;
          console.log(this.editMode)
        }
      )
  
  }
}
