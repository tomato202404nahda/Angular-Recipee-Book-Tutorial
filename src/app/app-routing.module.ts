import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { RecipeesComponent } from "./recipees/recipees.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { HeaderComponent } from "./header/header.component";
import { RecipeeDetailComponent } from "./recipees/recipee-detail/recipee-detail.component";
import { RecipeeResolverService } from "./recipees/recipee-detail/recipee-resolver.service";
import { RecipeeStartComponent } from "./recipees/recipee-start/recipee-start.component";
import { RecipeeEditComponent } from "./recipees/recipee-edit/recipee-edit.component";

const appRoutes: Routes = [
    {path: '', redirectTo: '/recipee', pathMatch: 'full'},
    {path: 'recipee', component: RecipeesComponent, 
        children: [
            //{path: ':id', component: RecipeeDetailComponent, resolve: {RecipeeResolverService}},
            {path: '', component: RecipeeStartComponent},
            {path: 'new', component: RecipeeEditComponent},
            {path: ':id', component: RecipeeDetailComponent},
            {path: ':id/edit', component: RecipeeEditComponent},
        
        ]
    },
    {path: 'shopping-list', component: ShoppingListComponent}
]


@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]

})
export class AppRoutingModule{

}