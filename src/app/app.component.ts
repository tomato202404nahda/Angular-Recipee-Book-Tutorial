import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeeService } from './recipees/recipee.service';
import { DataStorageService } from './shared/data-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'project-2nd';
  navigateTo: string ='recipee'
  constructor(private dataStorageService: DataStorageService, private router: Router, private currentRoute: ActivatedRoute){}



  ngOnInit(): void {
      this.dataStorageService.fetchRecipees().subscribe();
  }
    
}
