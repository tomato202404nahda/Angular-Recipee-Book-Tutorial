import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipeesComponent } from './recipees/recipees.component';
import { RecipeeListComponent } from './recipees/recipee-list/recipee-list.component';
import { RecipeeDetailComponent } from './recipees/recipee-detail/recipee-detail.component';
import { RecipeeItemComponent } from './recipees/recipee-list/recipee-item/recipee-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { DropdownClass } from './shared/dropdown.directive';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { AppRoutingModule } from './app-routing.module';
import { RecipeeResolverService } from './recipees/recipee-detail/recipee-resolver.service';
import { RecipeeStartComponent } from './recipees/recipee-start/recipee-start.component';
import { RecipeeEditComponent } from './recipees/recipee-edit/recipee-edit.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipeesComponent,
    RecipeeListComponent,
    RecipeeDetailComponent,
    RecipeeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownClass,
    RecipeeStartComponent,
    RecipeeEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    ShoppingListService,
    RecipeeResolverService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
