import { Component, OnInit,OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy {
  ngOnDestroy(): void {
    // console.log("Home Component Destroyed")
  }
  ngOnInit(): void {
    // console.log("Home Component Destroyed")
    
  }
  
}