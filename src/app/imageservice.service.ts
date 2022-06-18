import { Injectable } from '@angular/core';
import { AngularFireStorage } from "@angular/fire/storage";
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/firestore";
import { Observable, Subscriber } from 'rxjs';
import { CARDS, GALLERY } from './Model/interface';
import { TILES } from './Model/interface';
import { IMAGELST } from './Model/interface';
import { MatSnackBar } from '@angular/material/snack-bar';



@Injectable({
  providedIn: 'root'
})

export class ImageserviceService {
  onFirstLoad: boolean = true;
  carouselImgList: GALLERY[] = [];
  tilesImgList: TILES[] = [];
  imageList: IMAGELST[] = [];
  cardsimgList: CARDS[] = [];
  feedbackNotify:boolean=true;
  CardObs!: Observable<any>;
  CarouselObs!: Observable<any>;
  TitleObs!: Observable<any>;
  ImageObs!: Observable<any>;

  GalleryCol: AngularFirestoreCollection;
  TilesCol: AngularFirestoreCollection;
  ImageCol: AngularFirestoreCollection;
  CardsCol: AngularFirestoreCollection;
  constructor(private firedb: AngularFirestore, private _snackBar: MatSnackBar) {
    this.GalleryCol = this.firedb.collection('gallery');
    this.TilesCol = this.firedb.collection('tiles');
    this.ImageCol = this.firedb.collection('image');
    this.CardsCol = this.firedb.collection('cards');
  }

  //Image service
  getCarouselObs$(): Observable<GALLERY> {
    return new Observable<any>(obs => {
      this.GalleryCol.valueChanges().subscribe(gal => {
        var carouselObj: any[] = gal;
        if (this.carouselImgList.length == 0) {
          carouselObj.map(img => {
            this.carouselImgList.push(img);
          });
        }
        // console.log(this.carouselImgList);
        obs.next(true);
      }, error => {
        console.log(error.message);
        obs.error(false);
      })
    });
  }
  getCarousel(): GALLERY[] {
    return this.carouselImgList;
  }


  getTitlesObs$(): Observable<TILES> {
    return new Observable<any>(obs => {
      this.TilesCol.valueChanges().subscribe(til => {
        var titleObj: any[] = til;
        if (this.tilesImgList.length == 0) {
          titleObj.map(img => {
            this.tilesImgList.push(img);
          });
        }
        // console.log(this.tilesImgList);
        obs.next(true);
      }, error => {
        console.log(error.message);
        obs.error(false);

      })
    })
  }
  getTitles(): TILES[] {
    return this.tilesImgList;
  }


  getImgageObs$(): Observable<IMAGELST> {
    return new Observable<any>(obs => {
      this.ImageCol.valueChanges().subscribe(img => {
        var imageObj: any[] = img;
        if (this.imageList.length == 0) {
          imageObj.map(img => {
            this.imageList.push(img);
          });
        } 
        // console.log(this.imageList);
        obs.next(true);
      }, error => {
        console.log(error.message);
        obs.error(false);
      })
    });
  }
  getimgageLst(): IMAGELST[] {
    return this.imageList;
  }

  getCardImgObs$(): Observable<CARDS> {
    return new Observable<any>(obs => {
      this.CardsCol.valueChanges().subscribe(card => {
        var cardObj: any[] = card;
        if (this.cardsimgList.length === 0) {
          cardObj.map(img => {
            this.cardsimgList.push(img);
          })
        }
        // console.log(this.cardsimgList);
        obs.next(true);
      }, error => {
        console.log(error.message);
        obs.error(false);
      })
    });
  }

  getCardImg(): CARDS[] {
    return this.cardsimgList;
  }

  updateCardImgObs(cardList:CARDS[]):Observable<boolean>{
    
    
    return new Observable<boolean>(obs=>{
      this.cardsimgList.forEach(i=>{
        var ind=this.cardsimgList.indexOf(i);
        var doc="ca_img"+(ind+1);
        // console.log((cardList[ind].color==="warn"));
        
        if(cardList[ind].color==="warn"){
          i.color="none";
          // console.log("Updating...");
          // console.log(i);
          this.CardsCol.doc(doc).update(i).then((upd)=>{
            // console.log(upd);
          });
        }
      })
      // this.CardsCol.doc()
    })
  }


  openSnackBar(message: string) {
    this._snackBar.open(message, "", {
      duration: 1000
    });
  }
























  //service
  getMobileOperatingSystem() {
    var userAgent = navigator.vendor;
    if (/windows phone|window|android/i.test(navigator.userAgent)) {
      return "WIN";
    }
    if (/iPad|iPhone|iPod/.test(userAgent)) {
      return "iOS";
    }
    return "unknown";
  }
  getMobileorDeskyopSystem() {
    var userAgent = navigator.vendor;
    if (/windows|window|/i.test(navigator.userAgent)) {
      return "DESK";
    }
    if (/phone|android|iPad|iPhone/i.test(navigator.userAgent)) {
      return "PHN"
    }
    return "unknown";
  }
}


