import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Recipee } from "../recipees/recipee.model";
import { RecipeeService } from "../recipees/recipee.service";
import { map, tap } from "rxjs";


@Injectable({providedIn: 'root'})
export class DataStorageService{
    constructor(private http: HttpClient, private recipeeService: RecipeeService){

    }


    storeRecipees(){
        const recipees: Recipee[] = this.recipeeService.getRecipees()
        return this.http
            .put<Recipee[]>(
                'https://ng-course-recipee-book-12-default-rtdb.asia-southeast1.firebasedatabase.app/recipees.json', 
                recipees);
    }
    
    fetchRecipees(){
        return this.http
            .get<Recipee[]>(
                'https://ng-course-recipee-book-12-default-rtdb.asia-southeast1.firebasedatabase.app/recipees.json')
            .pipe(
                map(
                    (recipees)=>{
                        return recipees.map(
                            recipee => {
                                return {...recipee, ingredients: recipee.ingredients? recipee.ingredients : []}
                            }
                        );
                    }
                ),
                tap(
                    recipees => {
                        this.recipeeService.setRecipees(recipees);
                    }
                )
            )
            
    }
}