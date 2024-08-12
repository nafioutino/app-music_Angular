import { Component, OnInit } from '@angular/core';
import { Album } from '../album';
import { ALBUMS } from '../mock-albums';
import { AlbumService } from '../services/album.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css',
})
export class AlbumsComponent implements OnInit {
  titlePage: string = 'Page principal Albums Music';
  albums!: Album[];
  selectedAlbum!:Album
  constructor(private albumService: AlbumService) { }
  
  ngOnInit(): void {
    this.albums = this.albumService.getAlbums()
  }
  
  onSelect(id:string) {
    this.selectedAlbum = this.albumService.getalbumById(id)
    console.log(this.selectedAlbum);
  }
}