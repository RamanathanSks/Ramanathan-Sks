import { Title } from "@angular/platform-browser";
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
@Component({
  selector: 'app-not-found-component',
  templateUrl: './not-found-component.component.html',
  styleUrls: ['./not-found-component.component.css']
})
export class NotFoundComponentComponent implements OnInit {

  constructor(private title: Title) {
    title.setTitle("404 $ | Ramanathan");
  }

  ngOnInit(): void {
  }

}

@Component({
  selector: 'app-offline-component',
  templateUrl: './offline-component.html',
  styleUrls: ['./offline-component.css']
})
export class OfflineComponent implements OnInit {

  constructor(private route: Router, private title: Title) {

    title.setTitle("Offline | Ramanathan");
  }
  reload() {

    this.route.navigateByUrl("")
      .then(() => {
        window.location.reload();
      });
  }
  ngOnInit(): void {
  }



}