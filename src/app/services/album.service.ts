import { Injectable } from '@angular/core';
import { Album } from '../album';
import { ALBUMS } from '../mock-albums';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AlbumService {
  private albums: Album[] = ALBUMS;

  // Subject pour gérer le numéro de page actuel
  sendCurrentNumberPage = new Subject<number>();

  constructor() {}

  // Méthode qui retourne tous les albums
  getAlbums() {
    return this.albums;
  }

  // Méthode pour trouver un album par son id
  getAlbumById(albumId: string): Album {
    const foundAlbum = this.albums.find((album: Album) => album.id === albumId);
    if (!foundAlbum) {
      throw new Error('Album not found!');
    }
    return foundAlbum;
  }

  // Méthode pour paginer les albums
  paginateAlbums(page: number, perPage: number): Album[] {
    const startIndex = (page - 1) * perPage;
    const endIndex = startIndex + perPage;
    return this.albums.slice(startIndex, endIndex);
  }

  // Méthode pour mettre à jour le numéro de la page actuelle
  currentPage(page: number) {
    this.sendCurrentNumberPage.next(page);
  }
}
