import { Component, OnInit } from '@angular/core';
import { Album } from '../album';
import { AlbumService } from '../services/album.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css'],
})
export class AlbumsComponent implements OnInit {
  titlePage: string = 'Page principale Albums Music';
  perPage = 2; // Nombre d'albums par page

  albums!: Album[];
  selectedAlbum!: Album;
  hasClickDetails: boolean = false;

  constructor(private albumService: AlbumService, private router: Router) {}

  ngOnInit(): void {
    // Initialisation des albums pour la page 1
    this.updateAlbums(1);

    // S'abonner aux changements de page
    this.albumService.sendCurrentNumberPage.subscribe(pageNumber => {
      this.updateAlbums(pageNumber);
    });
  }

  updateAlbums(pageNumber: number): void {
    this.albums = this.albumService.paginateAlbums(pageNumber, this.perPage);
  }

  onViewAlbum(id: string) {
    this.selectedAlbum = this.albumService.getAlbumById(id);
    this.router.navigateByUrl(`album/${this.selectedAlbum.id}`);
    console.log(this.selectedAlbum.id);
  }

  onSelect(id: string) {
    this.selectedAlbum = this.albumService.getAlbumById(id);
    this.hasClickDetails = !this.hasClickDetails;
  }
}
