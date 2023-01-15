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
  imageUrl!: string;

  ngOnInit(){
    this.title = "Développeur Web";
    this.description = "Parce que j'aime créer des liens..."
    this.createdDate = new Date();
    this.snaps = 6;
    this.imageUrl = "https://www.portices.fr/wp-content/uploads/2020/11/developpeur-web-mobile-formation.jpg";
  }

}
