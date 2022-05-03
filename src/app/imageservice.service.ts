import { Injectable } from '@angular/core';
import { AngularFireStorage } from "@angular/fire/storage";
import { AngularFirestore } from "@angular/fire/firestore";
import * as firebase from 'firebase';
import { Observable, Subscriber } from 'rxjs';

interface imgint {
  url: string
}
@Injectable({
  providedIn: 'root'
})

export class ImageserviceService {
  onFirstLoad: boolean=true;
  CardObs!:Observable<any>;
  CarouselObs!:Observable<any>;
  TitleObs!:Observable<any>;
  ImageObs!:Observable<any>;
  constructor(private firedb: AngularFirestore) {

  }

  //Image service
  getCarouselObs():Observable<any>{
    this.CarouselObs =  this.firedb.collection('gallery').valueChanges();
    return this.CarouselObs;
  }


  getTitlesObs():Observable<any>{
    this.TitleObs =  this.firedb.collection('tiles').valueChanges();
    return this.TitleObs;
  }


  getImgageObs():Observable<any>{
    this.ImageObs = this.firedb.collection('image').valueChanges();
    return this.ImageObs;
  }


  getCardImgObs():Observable<any>{
    this.CardObs = this.firedb.collection('cards').valueChanges();
    return this.CardObs;
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
    if(/phone|android|iPad|iPhone/i.test(navigator.userAgent)){
      return "PHN"
    }
    return "unknown";
  }
}


