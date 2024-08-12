import { NgModule } from '@angular/core';
import { RouterModule, RouterOutlet, Routes } from '@angular/router';
import { AlbumsComponent } from './albums/albums.component';
import { LoginComponent } from './login/login.component';
import { AlbumDetailsComponent } from './album-details/album-details.component';
import { SingleAlbumComponent } from './single-album/single-album.component';
const routes: Routes = [
  {path:"albums", component:AlbumsComponent},
  {path:"", redirectTo:'/album', pathMatch:'full'},
  {path:"login", component:LoginComponent},
  {path:"album/:id", component:SingleAlbumComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
