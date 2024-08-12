import { Component, OnInit } from '@angular/core';
import { Album } from '../album';
import { AlbumService } from '../services/album.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-album',
  templateUrl: './single-album.component.html',
  styleUrl: './single-album.component.css'
})
export class SingleAlbumComponent implements OnInit {
  album!:Album;

  constructor(private albumService:AlbumService, private route:ActivatedRoute){}

  ngOnInit(): void {
  this.getAlbum()  
  }

  getAlbum(){
    const albumId = this.route.snapshot.params['id'];
    this.album = this.albumService.getalbumById(albumId)
  }
}
