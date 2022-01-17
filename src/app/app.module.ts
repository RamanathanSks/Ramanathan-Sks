import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { environment } from 'src/environments/environment';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule} from '@angular/fire/storage';

import {MaterialModule} from './material/material.module'

import { FlexLayoutModule } from '@angular/flex-layout';
import {CrystalLightboxModule} from '@crystalui/angular-lightbox';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AboutComponent } from './about/about.component';
import {barcodeDialog} from './app.component';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';
import {OfflineComponent} from './not-found-component/not-found-component.component';
@NgModule({ 
  declarations: [
    AppComponent,
    HomeComponent,
    barcodeDialog,
    GalleryComponent,
    AboutComponent,
    NotFoundComponentComponent,
    OfflineComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    FlexLayoutModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(
      {
        apiKey: "AIzaSyBHY37xmpyX5iD4NHxX41GEY3r9IAQCLc4",
        authDomain: "ram-port.firebaseapp.com",
        projectId: "ram-port",
        storageBucket: "ram-port.appspot.com",
        messagingSenderId: "843189379022",
        appId: "1:843189379022:web:1017471ca5142d93c2559f",
        measurementId: "G-TEPTLRLNBS"
      }
    ),
    AngularFireStorageModule,
    AngularFirestoreModule,
    CrystalLightboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
