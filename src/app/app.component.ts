import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'project-2nd';
  navigateTo: string ='recipee'
  constructor(private router: Router, private currentRoute: ActivatedRoute){}



  ngOnInit(): void {
      
  }
    
}
