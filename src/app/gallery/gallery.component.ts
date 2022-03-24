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
  CarouselSub!:Subscription;
  TilesSub!:Subscription;
  ImageListSub!:Subscription;
  onload:boolean=false;
  
  color: ThemePalette = 'primary';
  mode: ProgressBarMode = 'indeterminate';
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
    this.CarouselSub = this.imgser.getCarouselObs().subscribe(i=>{
      var carouselObj:any[]=i;
      if(this.carouselImgList.length==0){
        carouselObj.map(img=>{
          this.carouselImgList.push(img);
        });
      }
      
    });

    this.TilesSub = this.imgser.getTitlesObs().subscribe(i=>{
      var titleObj:any[]=i;
      if(this.tilesImgList.length==0){
        titleObj.map(img=>{
          this.tilesImgList.push(img);
        });
      }
      
    });
    
    this.ImageListSub = this.imgser.getImgageObs().subscribe(i=>{
      var imageObj:any[]=i;
      if(this.imageList.length==0){
        imageObj.map(img=>{
          this.imageList.push(img);
        });
      }
    });
  }

  ngOnDestroy(): void {
    this.CarouselSub.unsubscribe();
    this.TilesSub.unsubscribe();
    this.ImageListSub.unsubscribe();
  }
}
