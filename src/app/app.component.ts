import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { getWindow } from './window';
import { fromEvent, merge } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';

import { ImageserviceService } from './imageservice.service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent implements OnInit {
  title = 'rdem';
  name: string = "";
  isOpen = false;
  status: string = "";
  @Output() stateChange = new EventEmitter<string>();
  col = "primary"
  durationInSeconds = 5;

  constructor(private imgser: ImageserviceService, public dialog: MatDialog, private route: Router, private _snackBar: MatSnackBar) {

    if (this.imgser.onFirstLoad) {
      this.imgser.onFirstLoad = false;
    }
  }
  scrollToElement($element: any): void {
    console.log($element);
    $element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  }
  ngOnInit(): void {

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
          this.route.navigateByUrl("b2ZmbGluZQ");
        }
        if (res == 'online') {
          this.route.navigateByUrl("");

        }
      });

  }
  offsetFlag = true;
  @HostListener('window:scroll', ['$event'])
  getScrollHeight(event: any) {
    if (window.pageYOffset > 2500)
      this.offsetFlag = false;
    else
      this.offsetFlag = true;
  }


  @HostListener('contextmenu', ['$event'])
  onRightClick(event: any) {
    this.openSnackBar("Right Click - Disabled ⛔");
    event.preventDefault();
  }


  openbarcode(): void {
    const bardialog = this.dialog.open(barcodeDialog, {
      width: "auto",
      position: {
        bottom: '6%',
      },
    });

    bardialog.afterClosed().subscribe(res => {
      console.log("INSTAGRAM LINK")
    })
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
export class barcodeDialog { }

