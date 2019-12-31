import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bebe',
  templateUrl: './bebe.component.html',
  styleUrls: ['./bebe.component.css']
})
export class BebeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // tslint:disable-next-line:prefer-const
    let autoPlayVideo = document.getElementById('video-element') as HTMLVideoElement  ;
    // tslint:disable-next-line:only-arrow-functions
    autoPlayVideo.oncanplaythrough = function() {
      autoPlayVideo.muted = true;
      autoPlayVideo.play();
      autoPlayVideo.pause();
      autoPlayVideo.play();
    };
  }

}
