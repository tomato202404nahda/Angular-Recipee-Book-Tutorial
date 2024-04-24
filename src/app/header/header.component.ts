import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
 /*  @Output() pageChosen = new EventEmitter<string>() */
  constructor(private currentRoute: ActivatedRoute,
    private router: Router
  ){}

  /* onSelect(value:string){
    this.router.navigate([value]);
  } */

}
