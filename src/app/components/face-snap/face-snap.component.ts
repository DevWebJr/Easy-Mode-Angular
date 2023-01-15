import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit{
  title!: string;
  description!: string;
  createdDate!: Date; 
  snaps!: number;
  buttonText!: string;
  imageUrl!: string;
  snapped!: boolean;

  ngOnInit(){
    this.title = "Développeur Web";
    this.description = "Parce que j'aime créer des liens..."
    this.createdDate = new Date();
    this.snaps = 6;
    this.buttonText = "Snap"
    this.imageUrl = "https://www.portices.fr/wp-content/uploads/2020/11/developpeur-web-mobile-formation.jpg";
    this.snapped = false;
  }

  addSnap() {
    if(!this.snapped) {
      this.snaps++;
      this.snapped = true;
      this.buttonText = "Snap";
    }
    else {
      this.snaps--;
      this.snapped = false;
      this.buttonText = "Unsnap";
    }
  }
}
