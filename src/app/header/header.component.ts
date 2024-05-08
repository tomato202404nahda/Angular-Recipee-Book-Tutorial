import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {


 /*  @Output() pageChosen = new EventEmitter<string>() */
  constructor(private currentRoute: ActivatedRoute,
    private router: Router, private dataStorageService: DataStorageService
  ){}

  storeRecipees() {
    this.dataStorageService.storeRecipees()
      .subscribe(
        response => {

        }
      );
  }
  
  fetchRecipees() {
    this.dataStorageService.fetchRecipees().subscribe();
  }

  /* onSelect(value:string){
    this.router.navigate([value]);
  } */

}
