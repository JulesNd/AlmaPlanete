import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // tslint:disable-next-line:only-arrow-functions
    jQuery(document).ready(function($) {

      // tslint:disable-next-line:only-arrow-functions
      window.onload = function () {
        $('.bts-popup').delay(1000).addClass('is-visible');
      };

      // open popup
      // tslint:disable-next-line:only-arrow-functions
      $('.bts-popup-trigger').on('click', function(event) {
        event.preventDefault();
        $('.bts-popup').addClass('is-visible');
      });

      //close popup
      $('.bts-popup').on('click', function(event) {
        if( $(event.target).is('.bts-popup-close') || $(event.target).is('.bts-popup') ) {
          event.preventDefault();
          $(this).removeClass('is-visible');
        }
      });
      //close popup when clicking the esc keyboard button
      $(document).keyup(function(event) {
        // tslint:disable-next-line:triple-equals
        // @ts-ignore
        // tslint:disable-next-line:triple-equals
        if (event.which == '27') {
          $('.bts-popup').removeClass('is-visible');
        }
      });
    });
  }

}
