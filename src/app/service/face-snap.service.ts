import { Injectable } from "@angular/core";
import { FaceSnap } from "../model/face-snap";

@Injectable(
    {
        providedIn: 'root'
    }
)
export class FaceSnapService{
    faceSnaps: FaceSnap[] = 
    [
        {
          title: "Développeur Web",
          description: "Parce que j'aime créer des liens...",
          imageUrl: "https://www.portices.fr/wp-content/uploads/2020/11/developpeur-web-mobile-formation.jpg",
          createdDate: new Date(),
          snaps: 146,
        },
        {
          title: "Designer Web",
          description: "Parce que les apparences comptent...",
          imageUrl: "https://static-cse.canva.com/blob/603776/canva_webdesigner_head.png",
          createdDate: new Date(),
          snaps: 84,
          location: 'londres'
        },
        {
          title: "Tech Lead",
          description: "Un grand pouvoir implique de grandes responsabilités",
          imageUrl: "https://soshace.com/wp-content/uploads/2019/07/outside-blog-tech-lead.png",
          createdDate: new Date(),
          snaps: 123,
          location: 'new york'
        }
    ]
}