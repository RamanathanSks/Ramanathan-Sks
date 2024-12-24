import { Component, ElementRef, OnInit, OnDestroy, AfterViewInit, ViewChild, HostListener } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { ImageserviceService } from '../imageservice.service';
import { CARDS } from '../Model/interface';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})

export class GalleryComponent implements OnInit, OnDestroy {


  @ViewChild('homebg') HomeBg: ElementRef | undefined;
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.innerWidth = window.innerWidth;
    this.screenwidth = this.innerWidth > 1200 ? true : false;
  }
  cardsimgList: CARDS[] = [];
  innerWidth: any = window.innerWidth;
  color = "none";
  isiosdev: boolean = false;
  screenwidth: boolean = false;
  carouselImgList: any[] = [];
  tilesImgList: any[] = [];
  imageList: any[] = [];
  onload: boolean = false;

  constructor(private imgser: ImageserviceService, private title: Title) {
    this.title.setTitle("Ramanathan Sks");
    var device = this.imgser.getMobileOperatingSystem();

    if (device == "WIN")
      this.isiosdev = false;
    else
      this.isiosdev = true;
  }
  changeColor(url: string) {
    // this.color = this.color=="none"?"warn":"none";
    this.cardsimgList.map(i => {
      if (i.url === url) {
        if (i.color === "none") {


          i.likeCnt = i.likeCnt + 1;
          i.color = "warn";
          if (this.imgser.feedbackNotify) {
            this.imgser.openSnackBar("Thank you for valuable feedback...❤️");
            this.imgser.feedbackNotify = false;
          }

        }
        else {
          i.likeCnt = i.likeCnt > 0 ? i.likeCnt - 1 : 0;
          i.color = "none";
        }

      }
    })
  }

  imgurl = "https://firebasestorage.googleapis.com/v0/b/ram-port.appspot.com/o/me.bw.jpeg?alt=media&token=82107549-f6a1-4383-8785-ade33a391c16"


  ngOnInit(): void {
    this.cardsimgList = this.imgser.getCardImg();
    this.onload = true;

    this.carouselImgList = this.imgser.getCarousel()
    this.tilesImgList = this.imgser.getTitles();
    this.imageList = this.imgser.getimgageLst();
  }

  getColor(url: string, likeCnt: number) {
    var color: string = "";
    this.cardsimgList.map(i => {
      if (i.url === url) {
        color = i.color;
      }
    });
    return color;
  }
  ngOnDestroy(): void {
    // console.log("Home Destoryed");

    this.imgser.updateCardImgObs(this.cardsimgList).subscribe()

  }

  viewPhoto() {
    this.imgser.openSnackBar("Still Working on it...!👾")
  }
}
