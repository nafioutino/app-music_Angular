import { Component, Input, OnInit } from '@angular/core';
import { Album } from '../album';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.css']
})
export class AlbumDetailsComponent implements OnInit {
  @Input() album!: Album;
  isPlaying: boolean = false;
  progress: number = 0;
  progressInterval: any;

  ngOnInit(): void {
  }

  play(): void {
    this.isPlaying = true;
    this.progress = 0;

    // Simule la progression
    this.progressInterval = setInterval(() => {
      if (this.progress < 100) {
        this.progress += 1;
      } else {
        clearInterval(this.progressInterval);
        this.isPlaying = false;
      }
    }, 1000); 
  }
}
