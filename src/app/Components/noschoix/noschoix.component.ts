import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-noschoix',
  templateUrl: './noschoix.component.html',
  styleUrls: ['./noschoix.component.css']
})
export class NoschoixComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // @ts-ignore
    $(document).on('click', '.map-point-sm', function() {
      // @ts-ignore
      const show = $(this).data('show');
      // @ts-ignore
      $(show).removeClass('hide').siblings().addClass('hide');
    });
  }

}
