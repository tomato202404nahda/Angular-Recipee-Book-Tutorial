import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Recipee } from "./recipee.model";
import { Observable } from "rxjs";
import { DataStorageService } from "../shared/data-storage.service";
import { RecipeeService } from "./recipee.service";

@Injectable({
    providedIn: 'root'
})


export class RecipeesResolverService implements Resolve<Recipee[]>{
    constructor(private dataStorageService: DataStorageService,
        private recipeeService: RecipeeService
    ){

    }
    
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Recipee[] | Observable<Recipee[]> | Promise<Recipee[]> {
        const recipees = this.recipeeService.getRecipees();

        if(recipees.length === 0){
            return this.dataStorageService.fetchRecipees();
        } else {
            return recipees;
        }
    }

}