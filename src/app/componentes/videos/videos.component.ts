import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {

  idVideo:string = ""

  constructor() { }

  ngOnInit(): void {
    this.idVideo = process.env.ID_VIDEO || "HUlJKgS_vao"
  }

}
