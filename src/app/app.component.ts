import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './model/face-snap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  mySnap!: FaceSnap;
  anotherSnap!: FaceSnap;

  ngOnInit(): void {
    this.mySnap = new FaceSnap(
    "Développeur Web",
    "Parce que j'aime créer des liens...",
    "https://www.portices.fr/wp-content/uploads/2020/11/developpeur-web-mobile-formation.jpg",
    new Date(),
    6
    )
    this.anotherSnap = new FaceSnap(
    "Designer Web",
    "Parce que les apparences comptent...",
    "https://static-cse.canva.com/blob/603776/canva_webdesigner_head.png",
    new Date(),
    4
    )
  }  
}
