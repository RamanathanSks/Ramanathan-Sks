import { Component, ElementRef, OnInit,OnDestroy,AfterViewInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { ImageserviceService } from '../imageservice.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy {
  
  @ViewChild('homebg')HomeBg:ElementRef | undefined;
  cardsimgList: any[] =[];
  isiosdev: boolean = false;
  HomeSub!: Subscription;
  constructor(private imgser: ImageserviceService, private title: Title) {
    this.title.setTitle("Ramanathan Sks");
    var device = this.imgser.getMobileOperatingSystem();

    if (device == "WIN") 
      this.isiosdev = false;
    else 
      this.isiosdev = true;
  }
 
  
 

  ngOnInit(): void {
    this.HomeSub = this.imgser.getCardImgObs().subscribe(i=>{
      var cardObj:any[]=i;
      cardObj.map(img=>{
        this.cardsimgList.push(img);
      })
    });
  }
  
  ngOnDestroy(): void {
    this.HomeSub.unsubscribe();
  }

}
