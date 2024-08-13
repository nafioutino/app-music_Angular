import { LOCALE_ID, mergeApplicationConfig, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumDetailsComponent } from './album-details/album-details.component';
import { SingleAlbumComponent } from './single-album/single-album.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { DatePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { PaginateComponent } from './paginate/paginate.component';
import { FormsModule } from '@angular/forms';
import { NgOptimizedImage } from '@angular/common'

@NgModule({
  declarations: [
    AppComponent,
    AlbumsComponent,
    AlbumDetailsComponent,
    SingleAlbumComponent,
    HeaderComponent,
    LoginComponent,
    PaginateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UpperCasePipe,
    TitleCasePipe,
    FormsModule,
    DatePipe
  ],
  exports:[],
  providers:  [
    {provide:LOCALE_ID,useValue:'fr-FR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }