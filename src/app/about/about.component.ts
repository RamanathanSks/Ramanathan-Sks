import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  imgurl="https://firebasestorage.googleapis.com/v0/b/ram-port.appspot.com/o/me.bw.jpeg?alt=media&token=82107549-f6a1-4383-8785-ade33a391c16"

  constructor(private title:Title,public dialog: MatDialog) { 
    this.title.setTitle("About | Ramanathan")
  }
  openbarcode(): void {
    const bardialog = this.dialog.open(ImageComponenet, {
      width: "auto"
    });

    setTimeout(()=>{
      this.dialog.closeAll();
    },10000);
  }
  ngOnInit(): void {
  }

}



@Component({
  selector: 'app-Image',
  templateUrl: 'image.html'
})
export class ImageComponenet{


  

}