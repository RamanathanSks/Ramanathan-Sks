import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
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
import {BottomSheet} from './app.component';
@NgModule({ 
  declarations: [
    AppComponent,
    HomeComponent,
    barcodeDialog,
    GalleryComponent,
    AboutComponent,
    NotFoundComponentComponent,
    OfflineComponent,BottomSheet
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    FlexLayoutModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(
      environment.firebase
    ),
    AngularFireStorageModule,
    AngularFirestoreModule,
    CrystalLightboxModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[],
})
export class AppModule { }
