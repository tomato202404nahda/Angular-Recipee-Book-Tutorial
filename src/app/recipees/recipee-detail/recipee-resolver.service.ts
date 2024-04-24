import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Recipee } from "../recipee.model";
import { Observable } from "rxjs";
import { RecipeeService } from "../recipee.service";
import { Injectable } from "@angular/core";

@Injectable()
export class RecipeeResolverService implements Resolve<Recipee>{
    
    constructor(private recipeeService: RecipeeService){

    }
    
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Recipee | Observable<Recipee> | Promise<Recipee> {
        return this.recipeeService.getRecipeeById(Number(route.params['id']))
    }
    
}