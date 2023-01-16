import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from 'src/app/model/face-snap';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit{
  @Input() 
  faceSnap!: FaceSnap;
  
  title!: string;
  description!: string;
  createdDate!: Date; 
  snaps!: number;
  buttonText: string = "🤔";
  imageUrl!: string;
  snapped!: boolean;

  ngOnInit(){}

  addSnap() {
    if(!this.snapped) {
      this.faceSnap.snaps++;
      this.snapped = true;
      this.buttonText = "👍";
    }
    else {
      this.faceSnap.snaps--;
      this.snapped = false;
      this.buttonText = "👎";
    }
  }
}
