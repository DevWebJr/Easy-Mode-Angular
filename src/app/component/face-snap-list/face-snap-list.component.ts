import { Component, OnInit } from '@angular/core';
import { FaceSnap } from 'src/app/model/face-snap';
import { FaceSnapService } from 'src/app/service/face-snap.service';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit {
  faceSnaps!: FaceSnap[];

  constructor(private faceSnapService: FaceSnapService) {}

  ngOnInit(): void {
    this.faceSnaps = this.faceSnapService.faceSnaps;
  }
}
