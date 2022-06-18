import { Component, OnInit, OnDestroy, ElementRef, AfterViewInit, Directive } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressBarMode } from '@angular/material/progress-bar';
import { ImageserviceService } from '../imageservice.service';
import { Title } from "@angular/platform-browser";
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})

export class GalleryComponent implements OnInit,OnDestroy,AfterViewInit {

  carouselImgList: any[] = [];
  tilesImgList: any[]= [];
  imageList: any[] = [];
  // CarouselSub!:Subscription;
  // TilesSub!:Subscription;
  // ImageListSub!:Subscription;
  onload:boolean=false;
  
  
  loader: boolean = true;
  constructor(private imgser: ImageserviceService, title: Title) {
    title.setTitle("Gallery | Ramanathan");
    
  }
  ngAfterViewInit(): void {
    setTimeout(() => {
      this.loader = false;
    }, 2000);
  }
  
  ngOnInit(): void {
    
    this.onload=true;

    this.carouselImgList=this.imgser.getCarousel()
    this.tilesImgList=this.imgser.getTitles();
    this.imageList=this.imgser.getimgageLst();
  }

  ngOnDestroy(): void {
    // this.CarouselSub.unsubscribe();
    // this.TilesSub.unsubscribe();
    // this.ImageListSub.unsubscribe();
  }
}
