import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chaussuresdetails2',
  templateUrl: './chaussuresdetails2.component.html',
  styleUrls: ['./chaussuresdetails2.component.css']
})
export class Chaussuresdetails2Component implements OnInit {

  constructor() { }

  ngOnInit() {
    // select all thumbnails
    const galleryThumbnail = document.querySelectorAll('.thumbnails-list li');
// select featured
    const galleryFeatured = document.querySelector('.product-gallery-featured img');

// loop all items
    galleryThumbnail.forEach((item) => {
      // tslint:disable-next-line:only-arrow-functions
      item.addEventListener('mouseover', function() {
        const image = item.children[0].src;
        galleryFeatured.src = image;
      });
    });

// show popover
    // @ts-ignore
    $('.main-questions').popover('show');

  }

}
