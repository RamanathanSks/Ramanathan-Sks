import {  NgModule, Optional } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { environment } from 'src/environments/environment';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule} from '@angular/fire/storage';
import { AngularFireAnalytics, AngularFireAnalyticsModule, CONFIG, ScreenTrackingService, UserTrackingService } from '@angular/fire/analytics';

import {MaterialModule} from './material/material.module'


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
import {BottomSheetNFT} from './app.component';
@NgModule({ 
  declarations: [
    AppComponent,
    HomeComponent,
    barcodeDialog,
    GalleryComponent,
    AboutComponent,
    NotFoundComponentComponent,
    OfflineComponent,
    BottomSheet,BottomSheetNFT
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(
      environment.firebase
    ),
    AngularFireStorageModule,
    AngularFirestoreModule
  ],
  providers: [ScreenTrackingService,UserTrackingService,{ provide: CONFIG, useValue: {
    send_page_view: true,
    allow_ad_personalization_signals: true,
    anonymize_ip: true
  } }],
  bootstrap: [AppComponent],
  schemas:[],
})
export class AppModule {

  constructor(
    analytics: AngularFireAnalytics,
    @Optional() screenTracking: ScreenTrackingService,
    @Optional() userTracking: UserTrackingService
  ) {
    // calling anything on analytics will eagerly load the SDK
    analytics.app;
  }
 }
