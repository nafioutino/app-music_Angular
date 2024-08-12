import { Injectable } from '@angular/core';
import { Album } from '../album';
import { ALBUMS } from '../mock-albums';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  private albums: Album[] = ALBUMS;


  // Methode qui retourne tous les albums
  getAlbums() {
    return this.albums
  }

  // Methode pour trouver un album par son id
  getalbumById(albumId: string): Album {
    const foundAlbum = this.albums.find((album:Album )=> album.id === albumId);
    if (!foundAlbum) {
      throw new Error('Album not found!');
    }
    return foundAlbum; 
  }


  constructor() { }

}
