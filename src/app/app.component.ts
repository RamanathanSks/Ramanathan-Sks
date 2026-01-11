import { Component, ElementRef, EventEmitter, HostListener, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { getWindow } from './window';
import { fromEvent, merge, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';

import { ImageserviceService } from './imageservice.service';
import { Router } from '@angular/router';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatMenuTrigger } from '@angular/material/menu';
import { AngularFireAnalytics } from '@angular/fire/compat/analytics';
import { ThemePalette } from '@angular/material/core';
import { ProgressBarMode } from '@angular/material/progress-bar';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent implements OnInit ,OnDestroy{
  title = 'Ramanathan';
  name: string = "";
  isOpen = false;
  status: string = "";
  @Output() stateChange = new EventEmitter<string>();
  col = "primary"
  durationInSeconds = 5;
  currentUrl: any;
  hide: boolean = true

  loader: boolean = false;
  color: ThemePalette = 'primary';
  mode: ProgressBarMode = 'indeterminate';
  githuburl:string;
  codeurl:string;
  issueurl:string;
  instagramurl:string;
  facebookurl:string;
  twitterurl:string;
  fhpixurl:string;
  nfturl:string;
  CarouselSub!: Subscription;
  TilesSub!: Subscription;
  ImageListSub!: Subscription;
  CardSub!: Subscription;
  constructor(
    private imgser: ImageserviceService,
    private _bottomSheet: MatBottomSheet,
    public dialog: MatDialog,
    private route: Router,
    private _snackBar: MatSnackBar) {
    this.githuburl=environment.GITHUB_URL;
    this.codeurl=environment.CODE_URL;
    this.issueurl=environment.ISSUE_URL;
    this.instagramurl=environment.INSTAGRAM_URL;
    this.facebookurl=environment.FACEBOOK_URL;
    this.fhpixurl=environment.FHPIX_URL;
    this.twitterurl=environment.TWITTER_URL;
    this.nfturl=environment.NFT_URL;
    if (this.imgser.onFirstLoad) {
      this.imgser.onFirstLoad = false;
    }
  }
  
  Connect() {
    this._bottomSheet.open(BottomSheet);
  }
  @ViewChild(MatMenuTrigger) trigger!: MatMenuTrigger;

  openNFTmenu() {
    this.trigger.openMenu();
  }
  closeNFTmenu() {
    this.trigger.closeMenu();
  }
  OpenNFTSheet() {
    this._bottomSheet.open(BottomSheetNFT);
  }

  ngOnInit(): void {

    this.getAllData();


    const { onLine } = getWindow().navigator;
    this.status = onLine ? 'online' : 'offline'

    this.stateChange.emit(this.status);
    merge(
      fromEvent<Event>(getWindow(), 'online'),
      fromEvent<Event>(getWindow(), 'offline'),
    ).pipe(
      map(x => x.type)).subscribe(res => {
        this.status = res;
        this.stateChange.emit(res);
        if (res == 'offline') {
          this.currentUrl = this.route.url;
          this.route.navigateByUrl("b2ZmbGluZQ");
        }
        if (res == 'online') this.route.navigateByUrl(this.currentUrl);
      });


  }

  


  ngOnDestroy(): void {

    this.CarouselSub.unsubscribe();
    this.TilesSub.unsubscribe();
    this.ImageListSub.unsubscribe();
    this.CardSub.unsubscribe();
    
  }
  getAllData() {
    this.CarouselSub = this.imgser.getCarouselObs$().subscribe(sub => {
      if (sub) {
        // console.log("getCarouselObs success");
        this.TilesSub = this.imgser.getTitlesObs$().subscribe(sub => {
          if (sub) {
            // console.log("getTitlesObs success");
            this.ImageListSub=this.imgser.getImgageObs$().subscribe(sub=>{
              if(sub){
                // console.log("getImgageObs success");
                this.CardSub=this.imgser.getCardImgObs$().subscribe(sub=>{
                  if(sub){
                    // console.log("Data Updated");
                    this.loader = true;
                  }
                });
              }
            });
          }
        });
      }
    });
  }

  offsetFlag = true;
  @HostListener('window:scroll', ['$event'])
  getScrollHeight(event: any) {
    if (window.pageYOffset > 2500) this.offsetFlag = false;
    else this.offsetFlag = true;
  }





  @HostListener('contextmenu', ['$event'])
  onRightClick(event: any) {
    this.openSnackBar("Disabled ⛔");
    event.preventDefault();
  }




  gotop() {
    window.scroll(0, 0);
  }




  openbarcode(): void {
    const bardialog = this.dialog.open(barcodeDialog, {
      width: "auto",
      position: { bottom: '6%' },
    });

    bardialog.afterClosed().subscribe()
  }
  closebarcode(): void {
    this.dialog.closeAll();
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, "", {
      duration: 1000
    });
  }

}









@Component({
  selector: 'barcode',
  templateUrl: './barcodeDialog.html',
})
export class barcodeDialog { 
  instagramurl:string;
  constructor(){
    this.instagramurl=environment.INSTAGRAM_URL;
  }
}






//bottom sheet
@Component({
  selector: 'bottom-sheet',
  templateUrl: 'bottom-sheet.html',
})
export class BottomSheet {
  mailLink = "mailto:ramanathan.sks@gmail.com";
  constructor(private imgser: ImageserviceService, private _bottomSheetRef: MatBottomSheetRef<BottomSheet>) {
    var device = this.imgser.getMobileorDeskyopSystem();
  }
  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}


@Component({
  selector: 'bottom-sheet2',
  templateUrl: 'bottom-sheet2.html',
})
export class BottomSheetNFT {
  constructor(private _bottomSheetRef2: MatBottomSheetRef<BottomSheet>) { }

  openLink(event: MouseEvent): void {
    this._bottomSheetRef2.dismiss();
    event.preventDefault();
  }
}