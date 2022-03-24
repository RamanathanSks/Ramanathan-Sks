import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AboutComponent } from './about/about.component';
import {NotFoundComponentComponent} from './not-found-component/not-found-component.component'
import {OfflineComponent} from './not-found-component/not-found-component.component';

const routes: Routes = [
  {path:'',redirectTo:'Home',pathMatch:'full'},
  {path:'Home',component:HomeComponent},
  {path:"Gallery",component:GalleryComponent},
  {path:"About",component:AboutComponent},
  {path:"b2ZmbGluZQ",component:OfflineComponent},
  {path: '404', component: NotFoundComponentComponent},
  {path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
