import { Component, OnInit,OnDestroy } from '@angular/core';
import { BottomSheet } from '../app.component';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy {
  constructor(private _bottomSheet: MatBottomSheet) { }
  imgurl="https://firebasestorage.googleapis.com/v0/b/ram-port.appspot.com/o/me.bw.jpeg?alt=media&token=82107549-f6a1-4383-8785-ade33a391c16"
  ngOnDestroy(): void {
    // console.log("Home Component Destroyed")
  }
  ngOnInit(): void {
    // console.log("Home Component Destroyed")
    
  }
  loadedImg(){
    console.log("Image Loaded")
  }
  Connect() {
    this._bottomSheet.open(BottomSheet);
  }
  
}