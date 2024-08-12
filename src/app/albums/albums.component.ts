import { Component, OnInit } from '@angular/core';
import { Album } from '../album';
import { ALBUMS } from '../mock-albums';
import { AlbumService } from '../services/album.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css',
})
export class AlbumsComponent implements OnInit {
  titlePage: string = 'Page principal Albums Music';

  albums!: Album[];
  selectedAlbum!:Album;
  hasClickDetails:boolean = false;
  constructor(private albumService: AlbumService, private router:Router) { }
  
  ngOnInit(): void {
    this.albums = this.albumService.getAlbums()
  }

  onViewAlbum(id:string){
    this.selectedAlbum = this.albumService.getalbumById(id)
    this.router.navigateByUrl(`album/${this.selectedAlbum.id}`)
    console.log(this.selectedAlbum.id);
    
  }
  
  onSelect(id:string) {
    this.selectedAlbum = this.albumService.getalbumById(id)
    this.hasClickDetails = !this.hasClickDetails
  }
}